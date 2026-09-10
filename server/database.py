import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()

# Falls back to a local SQLite file so the project runs out of the box.
# Set DATABASE_URL (e.g. a Postgres URL) in a .env file locally, or as an
# environment variable on the host (Vercel, Render, etc.) for production.
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./learning.db")

connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    connect_args=connect_args,
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
