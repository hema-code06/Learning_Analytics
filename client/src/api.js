import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const createEntry = (data) => API.post("/learning/", data);
export const getEntries = () => API.get("/learning/");
export const updateEntry = (id, data) => API.put(`/learning/${id}`, data);
export const deleteEntry = (id) => API.delete(`/learning/${id}`);
export const getOverview = () => API.get("/analytics/overview");
export const getSkills = () => API.get("/analytics/skills");
export const getTopicBreakdown = () => API.get("/analytics/topic-breakdown");
export const getStudyTime = (mode) =>
  API.get(`/analytics/study-time?mode=${mode}`);
export const getStreak = () => API.get("/analytics/streak");
export const getMonthlyGoal = () => API.get("/analytics/monthly-goal");
export const setMonthlyGoal = (goal) =>
  API.post("/analytics/monthly-goal", { goal });
export const getInsights = () => API.get("/analytics/insights");
export const getAveragePerformance = () =>
  API.get("/analytics/average-performance");
export const getConsistency = () => API.get("/analytics/consistency");

export default API;
