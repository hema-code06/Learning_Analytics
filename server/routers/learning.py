from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.post("/")
def create_entry(entry: schemas.LearningCreate, db: Session = Depends(get_db)):
    new_entry = models.LearningEntry(
        topic=entry.topic,
        date=entry.date,
        hours=entry.hours
    )
    db.add(new_entry)
    db.commit()
    db.refresh(new_entry)
    return new_entry


@router.get("/")
def get_entries(db: Session = Depends(get_db)):
    return db.query(models.LearningEntry).all()
