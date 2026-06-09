from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from main import run_pipeline
from core.rag_engine import ask_question

load_dotenv()

app = FastAPI(
    title="AI Video Assistant API",
    version="1.0.0"
)

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # React Vite
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Global Storage
# -----------------------------
current_rag_chain = None
current_transcript = ""
current_title = ""

# -----------------------------
# Request Models
# -----------------------------
class VideoRequest(BaseModel):
    url: str
    language: str = "english"


class ChatRequest(BaseModel):
    question: str


# -----------------------------
# Health Check
# -----------------------------
@app.get("/")
def root():
    return {
        "message": "AI Video Assistant API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# -----------------------------
# Process Video
# -----------------------------
@app.post("/process")
def process_video(request: VideoRequest):

    global current_rag_chain
    global current_transcript
    global current_title

    try:

        result = run_pipeline(
            request.url,
            request.language
        )

        current_rag_chain = result["rag_chain"]
        current_transcript = result["transcript"]
        current_title = result["title"]

        return {
            "success": True,
            "title": result["title"],
            "summary": result["summary"],
            "action_items": result["action_items"],
            "key_decisions": result["key_decisions"],
            "open_questions": result["open_questions"],
            "transcript": result["transcript"]
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# -----------------------------
# Chat Endpoint
# -----------------------------
@app.post("/chat")
def chat(request: ChatRequest):

    global current_rag_chain

    if current_rag_chain is None:
        raise HTTPException(
            status_code=400,
            detail="Please process a video first."
        )

    try:

        answer = ask_question(
            current_rag_chain,
            request.question
        )

        return {
            "success": True,
            "answer": answer
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# -----------------------------
# Get Transcript
# -----------------------------
@app.get("/transcript")
def get_transcript():

    if not current_transcript:
        raise HTTPException(
            status_code=404,
            detail="No transcript available."
        )

    return {
        "title": current_title,
        "transcript": current_transcript
    }


# -----------------------------
# Video Metadata
# -----------------------------
@app.get("/video-info")
def video_info():

    if not current_title:
        raise HTTPException(
            status_code=404,
            detail="No processed video found."
        )

    return {
        "title": current_title
    }


# -----------------------------
# Run Locally
# -----------------------------
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )