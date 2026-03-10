import { useEffect, useState } from "react";

import DashboardLayout from "../layout/DashboardLayout";
import EntryForm from "../components/EntryForm";
import OverviewCards from "../components/OverviewCards";
import SkillDeveloped from "../components/SkillDeveloped";
import TopicBreakdown from "../components/TopicBreakdown";
import StudyTime from "../components/Charts/StudyTimeChart";
import StreakCard from "../components/StreakCard";
import MonthlyGoal from "../components/MonthlyGoal";
import SmartInsights from "../components/SmartInsights";
import AveragePerformance from "../components/AveragePerformance";
import ConsistencyScore from "../components/ConsistencyScore";

import {
  getOverview,
  getSkills,
  getTopicBreakdown,
  getStreak,
  getMonthlyGoal,
  getInsights,
  getAveragePerformance,
  getConsistency,
} from "../api";
import { data } from "autoprefixer";

const Dashboard = () => {
  const [overview, setOverview] = useState({});
  const [skills, setSkills] = useState([]);
  const [topics, setTopics] = useState([]);
  const [streak, setStreak] = useState(0);
  const [goal, setGoal] = useState({});
  const [insights, setInsights] = useState({});
  const [avg, setAvg] = useState(0);
  const [consistency, setConsistency] = useState(0);

  const load = async () => {
    const o = await getOverview();
    const s = await getSkills();
    const t = await getTopicBreakdown();
    const st = await getStreak();
    const g = await getMonthlyGoal();
    const i = await getInsights();
    const a = await getAveragePerformance();
    const c = await getConsistency();

    setOverview(o.data);
    setSkills(s.data);
    setTopics(t.data);
    setStreak(st.data.streak);
    setGoal(g.data);
    setInsights(i.data);
    setAvg(a.data.average_hours);
    setConsistency(c.data.consistency_score);
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <DashboardLayout>
      <EntryForm refresh={load} />

      <OverviewCards overview={overview} />

      <SkillDeveloped skills={skills} />

      <TopicBreakdown topics={topics} />

      <StudyTime />

      <StreakCard streak={streak} />

      <MonthlyGoal goal={goal} />

      <SmartInsights insights={insights} />

      <AveragePerformance avg={avg} />

      <ConsistencyScore score={consistency} />
    </DashboardLayout>
  );
};
export default Dashboard;
