# Learning Analytics Dashboard

> A full-stack personal learning tracker that helps you log study sessions, visualize progress, track streaks, and stay consistent with your learning goals.

---

## 🌐 Live Demo

| Service | URL |
|---------|-----|
| Frontend | [learning-analytics-wkwx.vercel.app](https://learning-analytics-wkwx.vercel.app/) |
| Backend API | FastAPI + PostgreSQL |

---

## 📌 About the Project

Learning Analytics Dashboard lets you log your daily learning entries (topic, date, hours) and turns that data into meaningful analytics — study time charts, skill breakdowns, streak tracking, consistency scoring, and smart insights — all through a clean, animated dashboard.

---

## 🚀 Features

### 📚 Learning Entry Management (CRUD)
- Add learning entries with topic, date, and hours
- Edit and delete existing entries
- View all logged learning activities in a list

### 📊 Analytics Dashboard
- **Overview Cards** — Total learning hours, skills developed, topics covered, consistency score
- **Study Time Chart** — Visualize learning hours over time (Daily / Weekly / Monthly view)
- **Skills Developed** — Hours invested per skill (radar/bar chart)
- **Topic Breakdown** — Session count per topic
- **Learning Overview** — Combined performance view

### 🔥 Streak Tracker
- Current learning streak (consecutive days)
- Best streak achieved

### 🎯 Monthly Goal
- Set a monthly learning hours goal
- Progress bar showing hours completed vs target

### 📈 Consistency Score
- Calculated from learning days vs total days passed in the current month
- Feedback messages: 🔥 Amazing / 💪 Great / ⚡ Keep going

### 💡 Smart Insights
- Auto-generated insights based on your data:
  - Your strongest skill right now
  - Total hours invested
  - Number of unique skills explored

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React.js + Vite | UI framework & build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Recharts | Charts & data visualization |
| Axios | HTTP client |
| React Toastify | Notifications |
| React Icons | Icon library |

### Backend
| Technology | Purpose |
|------------|---------|
| FastAPI | REST API framework |
| SQLAlchemy | ORM |
| PostgreSQL | Database |
| Pydantic | Request/response validation |
| Uvicorn | ASGI server |

---

## 🔧 Local Setup

### Prerequisites
- Node.js & npm
- Python 
- PostgreSQL

### 1. Clone the Repository
```bash
git clone https://github.com/hema-code06/Learning_Analytics.git
cd Learning_Analytics
```

### 2. Backend Setup
```bash
cd server
pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic python-dotenv
uvicorn main:app --reload
# Runs at http://localhost:8000
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
# Runs at http://localhost:5173
```

---

## 🔮 Future Improvements

- [ ] User authentication and multi-user support
- [ ] GitHub-style contribution heatmap
- [ ] Weekly goal tracking
- [ ] AI learning recommendations
- [ ] Export analytics report

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub — it motivates me to keep building!

---

*Built with ❤️ using React · FastAPI · Python · PostgreSQL · Tailwind CSS*
