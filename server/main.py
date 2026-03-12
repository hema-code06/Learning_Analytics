import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
from routers import learning, analytics

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://curious-puffpuff-c8baef.netlify.app/"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(learning.router, prefix="/learning", tags=["Learning"])
app.include_router(analytics.router, prefix="/analytics", tags=["Analytics"])


@app.get("/")
def root():
    return {"message": "Learning_Analytics API"}
