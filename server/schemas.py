from pydantic import BaseModel
from datetime import date


class LearningCreate(BaseModel):
    topic: str
    date: date
    hours: float


class LearningResponse(BaseModel):
    id: int
    topic: str
    date: date
    hours: float

    class Config:
        from_attributes = True


class GoalUpdate(BaseModel):
    goal: float
