from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from database import get_db
import models
from datetime import date, timedelta
from schemas import GoalUpdate

router = APIRouter()


@router.get("/overview")
def learning_overview(db: Session = Depends(get_db)):
    total_hours = db.query(func.sum(models.LearningEntry.hours)).scalar() or 0
    total_sessions = db.query(models.LearningEntry).count()

    return {
        "total_hours": float(total_hours),
        "total_sessions": total_sessions
    }


@router.get("/skills", response_model=list[dict])
def skill_developed(db: Session = Depends(get_db)):

    skills = db.query(
        models.LearningEntry.topic,
        func.sum(models.LearningEntry.hours)
    ).group_by(models.LearningEntry.topic).all()

    return [
        {
            "name": s[0],
            "value": float(s[1])
        }
        for s in skills
    ]


@router.get("/topic-breakdown")
def topic_breakdown(db: Session = Depends(get_db)):

    results = db.query(
        models.LearningEntry.topic,
        func.count(models.LearningEntry.id)
    ).group_by(models.LearningEntry.topic).all()

    return [
        {
            "name": r[0],
            "value": r[1]
        }
        for r in results
    ]


@router.get("/study-time")
def study_time(mode: str = "daily", db: Session = Depends(get_db)):

    if mode == "weekly":
        results = db.query(
            func.date_trunc('week', models.LearningEntry.date).label("week"),
            func.sum(models.LearningEntry.hours)
        ).group_by("week").order_by("week").all()

        return [
            {
                "period": str(r[0].date()),
                "hours": float(r[1])
            }
            for r in results
        ]

    if mode == "monthly":
        results = db.query(
            func.date_trunc('month', models.LearningEntry.date).label("month"),
            func.sum(models.LearningEntry.hours)
        ).group_by("month").order_by("month").all()

        return [
            {
                "period": str(r[0].date()),
                "hours": float(r[1])
            }
            for r in results
        ]
    results = db.query(
        models.LearningEntry.date,
        func.sum(models.LearningEntry.hours)
    ).group_by(models.LearningEntry.date)\
     .order_by(models.LearningEntry.date).all()

    return [
        {
            "period": str(r[0]),
            "hours": float(r[1])
        }
        for r in results
    ]


@router.get("/consistency")
def consistency_score(db: Session = Depends(get_db)):

    today = date.today()
    start_of_month = today.replace(day=1)
    days_passed = today.day
    learning_days = db.query(
        func.count(func.distinct(models.LearningEntry.date))
    ).filter(
        models.LearningEntry.date >= start_of_month,
        models.LearningEntry.date <= today
    ).scalar() or 0

    score = round((learning_days / days_passed) * 100, 2)

    message = ""

    if score >= 80:
        message = "🔥 Amazing consistency!"
    elif score >= 40:
        message = "💪 You're doing great, keep pushing!"
    elif score >= 20:
        message = "⚡ Not bad, try to study a little more often!"

    return {
        "score": score,
        "learning_days": learning_days,
        "days_passed": days_passed,
        "message": message
    }


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

    goal = db.query(models.MonthlyGoal).first()

    if not goal:
        return {"goal": 0, "completed": 0}

    hours = db.query(func.sum(models.LearningEntry.hours)).scalar() or 0

    return {
        "goal": float(goal.goal_hours),
        "completed": float(hours)
    }


@router.post("/monthly-goal")
def set_monthly_goal(goal: GoalUpdate, db: Session = Depends(get_db)):

    existing = db.query(models.MonthlyGoal).first()

    if existing:
        existing.goal_hours = goal.goal
    else:
        new_goal = models.MonthlyGoal(goal_hours=goal.goal)
        db.add(new_goal)

    db.commit()

    return {"goal": goal.goal}


@router.get("/insights")
def smart_insights(db: Session = Depends(get_db)):

    insights = []

    most_topic = db.query(
        models.LearningEntry.topic,
        func.sum(models.LearningEntry.hours)
    ).group_by(models.LearningEntry.topic)\
     .order_by(func.sum(models.LearningEntry.hours).desc())\
     .first()

    if most_topic:
        insights.append(
            f"🔥 {most_topic[0]} is your strongest skill right now!")

    total_hours = db.query(func.sum(models.LearningEntry.hours)).scalar()

    if total_hours:
        insights.append(
            f"⏱ You've invested {int(total_hours)} hours in learning.")

    topics_count = db.query(models.LearningEntry.topic).distinct().count()

    if topics_count:
        insights.append(f"🧠 You're exploring {topics_count} different skills!")

    if not insights:
        insights.append("Start logging your learning to see insights 🚀")

    return insights
