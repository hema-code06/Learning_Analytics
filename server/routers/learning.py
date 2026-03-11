from fastapi import APIRouter, Depends, HTTPException
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


@router.put("/{entry_id}")
def update_entry(entry_id: int, entry: schemas.LearningCreate, db: Session = Depends(get_db)):

    existing = db.query(models.LearningEntry).filter(
        models.LearningEntry.id == entry_id
    ).first()

    if not existing:
        raise HTTPException(status_code=404, detail="Entry not found")

    existing.topic = entry.topic
    existing.date = entry.date
    existing.hours = entry.hours

    db.commit()
    db.refresh(existing)

    return existing


@router.delete("/{entry_id}")
def delete_entry(entry_id: int, db: Session = Depends(get_db)):

    entry = db.query(models.LearningEntry).filter(
        models.LearningEntry.id == entry_id
    ).first()

    if not entry:
        raise HTTPException(status_code=404, detail="Entry not found")

    db.delete(entry)
    db.commit()

    return {"message": "Entry deleted"}
