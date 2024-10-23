from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "FastAPI is working!"}

@app.post("/upload-transcript/")
async def upload_transcript(file: UploadFile = File(...)):
    content = await file.read()
    transcript_text = content.decode("utf-8")
    
    return {"transcript": transcript_text}
