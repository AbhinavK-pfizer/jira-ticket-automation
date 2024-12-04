from fastapi import FastAPI, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

VOX_API_URL = "https://mule4api-comm-amer-dev.pfizer.com/vessel-openai-api-v1/completion"

@app.post("/upload-transcript")
async def upload_transcript(text: str = Form(None), file: UploadFile = None):
    payload = {}
    headers = {"Content-Type": "application/json"}

    if text:
        print(f"Received text: {text}")
        payload["type"] = "text"
        payload["data"] = text
    elif file:
        payload["type"] = "file"
        payload["filename"] = file.filename
        payload["content"] = (await file.read()).decode("utf-8")
        print(f"Received file: {file.filename}")

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(VOX_API_URL, json=payload, headers=headers)
        
        if response.status_code == 200:
            return response.json()
        else:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"VOX Error: {response.text}",
            )
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"Request failed: {str(e)}")