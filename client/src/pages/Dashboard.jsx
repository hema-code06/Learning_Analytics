import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../layout/DashboardLayout";
import Sidebar from "../components/Sidebar";
import EntryModal from "../components/EntryModal";

import LearningOverview from "../components/LearningOverview";
import OverviewCards from "../components/OverviewCards";
import SkillDeveloped from "../components/SkillDeveloped";
import StudyTimeChart from "../components/Charts/StudyTimeChart";
import TopicChart from "../components/Charts/TopicChart";
import StreakCard from "../components/StreakCard";
import MonthlyGoal from "../components/MonthlyGoal";
import ConsistencyScore from "../components/ConsistencyScore";
import SmartInsights from "../components/SmartInsights";

import {
  getEntries,
  deleteEntry,
  getOverview,
  getSkills,
  getStudyTime,
  getTopicBreakdown,
  getStreak,
  getMonthlyGoal,
  getConsistency,
  getInsights,
} from "../api";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editEntry, setEditEntry] = useState(null);
  const [overview, setOverview] = useState({});
  const [skills, setSkills] = useState([]);
  const [studyTime, setStudyTime] = useState([]);
  const [topics, setTopics] = useState([]);
  const [streak, setStreak] = useState({ current: 0, best: 0 });
  const [goal, setGoal] = useState({ goal: 0, completed: 0 });
  const [consistency, setConsistency] = useState(null);
  const [insights, setInsights] = useState([]);

  const loadEntries = async () => {
    try {
      const res = await getEntries();
      setEntries(res.data);
    } catch (err) {
      console.error("Error loading entries", err);
    }
  };

  const loadAnalytics = async () => {
    try {
      const [
        overviewRes,
        skillsRes,
        studyRes,
        topicRes,
        streakRes,
        goalRes,
        consistencyRes,
        insightRes,
      ] = await Promise.all([
        getOverview(),
        getSkills(),
        getStudyTime("daily"),
        getTopicBreakdown(),
        getStreak(),
        getMonthlyGoal(),
        getConsistency(),
        getInsights(),
      ]);

      setOverview(overviewRes.data || {});
      setSkills(skillsRes.data || []);
      setStudyTime(studyRes.data || []);
      setTopics(topicRes.data || []);
      setStreak(streakRes.data || { current: 0, best: 0 });
      setGoal(goalRes.data || { goal: 0, completed: 0 });
      setConsistency(consistencyRes.data);
      setInsights(insightRes.data || []);
    } catch (err) {
      console.error("Analytics load failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F4F5F0] text-[#16211D]/60">
        <p className="font-display text-lg font-medium">
          Starting server — this can take 10–20 seconds…
        </p>
      </div>
    );
  }

  const openModal = () => {
    setEditEntry(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEdit = (entry) => {
    setEditEntry(entry);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteEntry(id);
      toast.success("Entry Deleted");

      loadEntries();
      loadAnalytics();
    } catch (err) {
      toast.error("Deletion failed");
    }
  };

  return (
    <DashboardLayout
      sidebar={
        <Sidebar
          entries={entries}
          openModal={openModal}
          editEntry={handleEdit}
          removeEntry={handleDelete}
        />
      }
    >
      <div className="dashboard-grid">
        <div className="area-cards">
          <OverviewCards
            data={{
              ...overview,
              skills: skills.length,
              topics: topics.length,
              score: consistency?.score || 0,
            }}
          />
        </div>

        <div className="area-hero">
          <LearningOverview overview={overview} studyTime={studyTime} />
        </div>

        <div className="area-study">
          <StudyTimeChart data={studyTime} />
        </div>

        <div className="area-topic">
          <TopicChart data={topics} />
        </div>

        <div className="area-skills">
          <SkillDeveloped skills={skills} />
        </div>

        <div className="area-streak">
          <StreakCard current={streak.current} best={streak.best} />
        </div>

        <div className="area-goal">
          <MonthlyGoal data={goal} refresh={loadAnalytics} />
        </div>

        <div className="area-consistency">
          <ConsistencyScore data={consistency} />
        </div>

        <div className="area-insights">
          <SmartInsights data={insights} />
        </div>
      </div>

      {modalOpen && (
        <EntryModal
          close={closeModal}
          refresh={() => {
            loadEntries();
            loadAnalytics();
          }}
          edit={editEntry}
        />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;