import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../layout/DashboardLayout";

import Sidebar from "../components/Sidebar";
import EntryModal from "../components/EntryModal";

import OverviewCards from "../components/OverviewCards";
import AveragePerformance from "../components/AveragePerformance";
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
  getAveragePerformance,
} from "../api";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editEntry, setEditEntry] = useState(null);

  const [overview, setOverview] = useState({});
  const [skills, setSkills] = useState([]);
  const [studyTime, setStudyTime] = useState([]);
  const [topics, setTopics] = useState([]);
  const [streak, setStreak] = useState({ current: 0, best: 0 });
  const [goal, setGoal] = useState({ progress: 0 });
  const [consistency, setConsistency] = useState(null);
  const [insights, setInsights] = useState([]);
  const [performance, setPerformance] = useState([]);

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
        performanceRes,
      ] = await Promise.all([
        getOverview(),
        getSkills(),
        getStudyTime(),
        getTopicBreakdown(),
        getStreak(),
        getMonthlyGoal(),
        getConsistency(),
        getInsights(),
        getAveragePerformance(),
      ]);

      setOverview(overviewRes.data || {});
      setSkills(skillsRes.data || []);
      setStudyTime(studyRes.data || []);
      setTopics(topicRes.data || []);
      setStreak(streakRes.data || { current: 0, best: 0 });
      setGoal(goalRes.data || { progress: 0 });
      setConsistency(consistencyRes.data);
      setInsights(insightRes.data || []);
      setPerformance(performanceRes.data || []);
    } catch (err) {
      console.error("Analytics load failed", err);
    }
  };

  useEffect(() => {
    loadEntries();
    loadAnalytics();
  }, []);

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
      <div className="space-y-6">
        <OverviewCards data={overview} />

        <div className="grid grid-cols-3 gap-6">
          <SkillDeveloped skills={skills} />
          <StudyTimeChart data={studyTime} />
          <TopicChart data={topics} />
        </div>

        <div className="grid grid-cols-4 gap-6">
          <StreakCard current={streak.current} best={streak.best} />
          <MonthlyGoal data={goal} />
          <ConsistencyScore data={consistency} />
          <SmartInsights data={insights} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <AveragePerformance data={performance} />
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
