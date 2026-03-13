# 📊 Learning Analytics Dashboard

Built with **React + FastAPI** that helps users track their learning progress, analyze study patterns, and stay consistent with their learning goals.

This project allows users to log learning entries (topic, date, hours) and visualize analytics such as learning hours, skill development, topic breakdown, streak tracking, consistency score, and monthly goals.

---

## 🚀 Features

### 📚 Learning Entry Management (CRUD)
- Add learning entries with **topic, date, and hours**
- Edit existing entries
- Delete entries
- View all logged learning activities

### 📈 Analytics Dashboard
- **Overview Cards**
  - Total learning hours
  - Skills developed
  - Topics covered
  - Consistency score

- **Learning Overview**
  - Visual analytics for learning performance

- **Skills Developed**
  - Radar chart showing skill growth

- **Study Time Chart**
  - Visual representation of time spent learning

- **Topic Breakdown**
  - Analyze time spent per topic

- **Streak Tracker**
  - Current learning streak
  - Best streak achieved

- **Monthly Goal**
  - Set monthly learning hours
  - Progress bar visualization

- **Consistency Score**
  - Calculates learning consistency based on study frequency

- **Smart Insights**
  - Suggestions based on learning behavior

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **TailwindCSS**
- **Framer Motion**
- **Recharts**
- **React Toastify**
- **React Icons**

### Backend
- **FastAPI**
- **SQLAlchemy**
- **SQLite / PostgreSQL**
- **Pydantic**
---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/hema-code06/Learning_Analytics.git
cd learning_analytics
```

---

### 2️⃣ Backend Setup (FastAPI)

```bash
cd backend

python -m venv venv
venv\Scripts\activate   #Windows

pip install -r requirements.txt
```

Run backend server:

```bash
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

---

### 3️⃣ Frontend Setup (Vite + React + TailwindCSS)

```bash
cd frontend

npm create vite@latest ./
npm install

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Run the frontend development server:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```
---

## 💡 Future Improvements

- User authentication
- Multi-user support
- AI learning recommendations
- Weekly goal tracking
- GitHub-style contribution heatmap
- Export analytics reports

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch
3. Commit your changes
4. Submit a pull request

---

⭐ If you like this project, consider giving it a **star on GitHub**!
