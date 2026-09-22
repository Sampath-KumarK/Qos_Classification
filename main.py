import os
import secrets
import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Network QoS Measurement Server")

# Allow CORS for the frontend Vite server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load ML Model
MODEL_PATH = "qos_model.joblib"
model = None

@app.on_event("startup")
def load_model():
    global model
    if os.path.exists(MODEL_PATH):
        try:
            model = joblib.load(MODEL_PATH)
            print(f"Loaded ML model from {MODEL_PATH}")
        except Exception as e:
            print(f"Failed to load model: {e}")
    else:
        print(f"Warning: Model not found at {MODEL_PATH}. Prediction endpoint will fail until trained.")

class PredictionRequest(BaseModel):
    latency_ms: float
    jitter_ms: float
    packet_loss_pct: float
    throughput_mbps: float

@app.post("/api/predict")
def predict_qos(req: PredictionRequest):
    if model is None:
        raise HTTPException(status_code=500, detail="Model is not loaded. Train the model first.")

    # Format the input data for the model
    # Features must match the training order: latency_ms, jitter_ms, packet_loss_pct, throughput_mbps
    input_data = pd.DataFrame([{
        "latency_ms": req.latency_ms,
        "jitter_ms": req.jitter_ms,
        "packet_loss_pct": req.packet_loss_pct,
        "throughput_mbps": req.throughput_mbps
    }])
    
    prediction = model.predict(input_data)[0]
    
    # Get probabilities
    proba = model.predict_proba(input_data)[0]
    classes = model.classes_
    probabilities = {cls: float(prob) for cls, prob in zip(classes, proba)}
    
    confidence = float(max(proba))
    
    return {
        "prediction": prediction,
        "confidence": confidence,
        "probabilities": probabilities
    }

@app.get("/api/network/ping")
def ping_endpoint():
    """
    Lightweight endpoint for measuring latency and jitter.
    Returns a tiny payload.
    """
    return PlainTextResponse("pong", headers={
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
    })

def generate_random_chunks(total_size_mb: int, chunk_size_kb: int = 64):
    """
    Generator that yields random byte chunks.
    Used for throughput testing.
    """
    total_bytes = total_size_mb * 1024 * 1024
    chunk_size = chunk_size_kb * 1024
    bytes_generated = 0
    
    # Pre-generate a chunk to avoid CPU bottleneck during streaming
    chunk = os.urandom(chunk_size)
    
    while bytes_generated < total_bytes:
        remaining = total_bytes - bytes_generated
        yield chunk[:remaining] if remaining < chunk_size else chunk
        bytes_generated += chunk_size

@app.get("/api/network/download-test")
def download_test(size_mb: int = 15):
    """
    Endpoint for measuring throughput.
    Streams a dynamically generated binary payload of `size_mb` Megabytes.
    Default is 15MB which should be sufficient for a 5 second test on most connections,
    but can be requested larger if needed.
    """
    # Max cap to prevent abuse
    safe_size = min(max(size_mb, 1), 100) 
    
    return StreamingResponse(
        generate_random_chunks(safe_size), 
        media_type="application/octet-stream",
        headers={
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
            # We provide Content-Length so the client knows exactly what to expect
            "Content-Length": str(safe_size * 1024 * 1024)
        }
    )

if __name__ == "__main__":
    import uvicorn
    import os
    # Start the server using uvicorn (binds to PORT env var if available, for cloud deployment)
    port = int(os.getenv("PORT", 8000))
    print("Starting FastAPI Network QoS Test Server...")
    uvicorn.run("main:app", host="0.0.0.0", port=port)
