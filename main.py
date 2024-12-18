from fastapi import FastAPI, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import httpx
import json
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()

verification_url = os.getenv("verification_url")
mulesoft_url = os.getenv("mulesoft_url")

client_id = os.getenv("client_id")
client_secret = os.getenv("client_secret")

def generate_token(verification_url, client_id, client_secret):
    try:
        url = f"{verification_url}"
        payload = f"client_id={client_id}&client_secret={client_secret}"
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        response = requests.request("POST", url, headers=headers, data=payload)
        token = response.json()["access_token"]
        return "Bearer " + token
    
    except Exception as e:
        return {
            "status": "error",
            "data": e,
            "message": e.orig.args if hasattr(e, "orig") else f"{e}",
        }

@app.post("/upload-transcript")
async def upload_transcript(text: str = Form(None), file: UploadFile = None):
    token = generate_token(verification_url, client_id, client_secret)
    if not token.startswith("Bearer"):
        raise HTTPException(status_code=500, detail="Bearer token not generated")

    headers = {
        "Content-Type": "application/json",
        "Authorization": token,
    }

    base_prompt = "Below, you are presented with a transcript from a Pfizer meeting. You have no prior context of the content of the meeting, only what is provided below. Pfizer engineers use Jira for project management purposes. Your job is to generate Jira epics and stories based on the transcript below. An epic is a larger, overarching item to be completed, and stories are what make up an epic. A story consists of a title, a description, an assignee, a status (Backlog, Selected for Development, Backburner, In Progress, or Done), and a deadline. An epic consists of a title, a description, and an assignee. This is important: if the transcript does not provide you with the information to complete a parameter of a story or epic, do not invent information; only use what is provided. Here is an example epic. Title: Automating Jira Ticket Creation From Meeting Transcripts. Description: This project aims to automate the process of creating and updating JIRA tickets from meeting transcripts. The business value of this automation lies in its ability to save time and effort by automatically generating tickets from design discussions and other meetings. This will ensure that important tasks are captured and tracked, and existing tickets can be updated, with minimal manual intervention, leading to incrased efficiency and productivity. Assignee: Gelotte, Christine Marie     What follows is an example story. Title: Get data for justification project. Assignee: Gelotte, Christine Marie  Description: Meet with the DFIT team, get a query for data with the justification project - get clearance for usage for this project (anonymize data). Acceptance Criteria: 1. Meet with DFIT team (invite Robert) to find out what data we can get access to. 2. Create a data set (inner join on hash of ntid w/ justifications and dfit data sources, remove the hash in final set. 3. Export dataset as csv file and provide to the students working on justification project.  Status: Done"
    
    if text:
        prompt = base_prompt + text
    elif file:
        try:
            file_content = await file.read()
            decoded_content = file_content.decode("utf-8")
            prompt = base_prompt + decoded_content
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Error reading file: {str(e)}")
    else:
        raise HTTPException(status_code=400, detail="No input found")

    payload = {
        "prompt": prompt,
        "engine": "gpt-35-turbo",
        "temperature": 0,
        "max_tokens": "1000"
    }

    print(f"Payload to VOX API: {payload}")
    print(f"Headers to VOX API: {headers}")
    print(f"Received text: {text}")
    print(f"Received file: {decoded_content}")

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(mulesoft_url, json=payload, headers=headers)

            print(f"Response status code: {response.status_code}")
            print(f"Response content: {response.text}")
        
        if response.status_code == 200:
            return response.json()
        else:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"VOX Error: {response.text}",
            )
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"Request failed: {str(e)}")