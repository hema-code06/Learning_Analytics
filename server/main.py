from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
from routers import learning, analytics

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(learning.router, prefix="/learning", tags=["Learning"])
app.include_router(analytics.router, prefix="/analytics", tags=["Analytics"])


@app.get("/")
def root():
    return {
        "status": "success",
        "message": "Learning Analytics API is running 🚀"
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }
