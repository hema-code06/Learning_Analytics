from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from database import get_db
import models
from datetime import date, timedelta

router = APIRouter()


@router.get("/overview")
def learning_overview(db: Session = Depends(get_db)):
    total_hours = db.query(func.sum(models.LearningEntry.hours)).scalar() or 0
    total_sessions = db.query(models.LearningEntry).count()

    return {
        "total_hours": total_hours,
        "total_sessions": total_sessions
    }


@router.get("/skills")
def skill_developed(db: Session = Depends(get_db)):
    skills = db.query(
        models.LearningEntry.topic,
        func.sum(models.LearningEntry.hours)
    ).group_by(models.LearningEntry.topic).all()

    return skills


@router.get("/topic-breakdown")
def topic_breakdown(db: Session = Depends(get_db)):

    results = db.query(
        models.LearningEntry.topic,
        func.count(models.LearningEntry.id)
    ).group_by(models.LearningEntry.topic).all()

    return [
        {
            "topic": r[0],
            "count": r[1]
        }
        for r in results
    ]


@router.get("/study-time")
def study_time(mode: str = "daily", db: Session = Depends(get_db)):

    if mode == "weekly":
        return db.query(
            func.date_trunc('week', models.LearningEntry.date),
            func.sum(models.LearningEntry.hours)
        ).group_by(func.date_trunc('week', models.LearningEntry.date)).all()

    if mode == "monthly":
        return db.query(
            func.date_trunc('month', models.LearningEntry.date),
            func.sum(models.LearningEntry.hours)
        ).group_by(func.date_trunc('month', models.LearningEntry.date)).all()

    return db.query(
        models.LearningEntry.date,
        func.sum(models.LearningEntry.hours)
    ).group_by(models.LearningEntry.date).all()


@router.get("/average-performance")
def average_performance(db: Session = Depends(get_db)):
    avg = db.query(func.avg(models.LearningEntry.hours)).scalar() or 0
    return {"average_hours": avg}


@router.get("/consistency")
def consistency_score(db: Session = Depends(get_db)):
    total_days = db.query(func.count(func.distinct(
        models.LearningEntry.date))).scalar() or 0
    total_entries = db.query(models.LearningEntry).count()

    score = 0
    if total_entries > 0:
        score = round((total_days / total_entries) * 100, 2)

    return {"consistency_score": score}


@router.get("/streak")
def streak(db: Session = Depends(get_db)):

    dates = db.query(models.LearningEntry.date)\
        .distinct()\
        .order_by(models.LearningEntry.date.desc())\
        .all()

    dates = [d[0] for d in dates]

    streak = 0
    today = date.today()

    for d in dates:
        if d == today or d == today - timedelta(days=streak):
            streak += 1
        else:
            break

    return {"streak": streak}


@router.get("/monthly-goal")
def monthly_goal(db: Session = Depends(get_db)):

    hours = db.query(func.sum(models.LearningEntry.hours))\
        .filter(func.date_trunc('month', models.LearningEntry.date) == func.date_trunc('month', func.current_date()))\
        .scalar() or 0

    goal = 50

    return {
        "goal": goal,
        "completed": hours
    }


@router.get("/insights")
def smart_insights(db: Session = Depends(get_db)):

    most_topic = db.query(
        models.LearningEntry.topic,
        func.sum(models.LearningEntry.hours)
    ).group_by(models.LearningEntry.topic)\
        .order_by(func.sum(models.LearningEntry.hours).desc())\
        .first()

    return {
        "most_learned_topic": most_topic[0] if most_topic else None
    }
