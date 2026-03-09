from sqlalchemy import Column, Integer, String, Date, Float
from database import Base


class LearningEntry(Base):
    __tablename__ = "learning_entries"

    id = Column(Integer, primary_key=True, index=True)
    topic = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    hours = Column(Float, nullable=False)
