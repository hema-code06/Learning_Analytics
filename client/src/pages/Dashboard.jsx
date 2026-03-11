import { useEffect, useState } from "react";

import DashboardLayout from "../layout/DashboardLayout";

import Sidebar from "../components/Sidebar";
import EntryModal from "../components/EntryModal";
import TopicChart from "../components/Charts/TopicChart";

import {
  getEntries,
  deleteEntry,
  getOverview,
  getSkills,
  getTopicBreakdown,
  getStudyTime,
  getStreak,
  getMonthlyGoal,
  getInsights,
  getAveragePerformance,
  getConsistency,
} from "../api";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [topics, setTopics] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(null);
  const load = async () => {
    const e = await getEntries();
    const t = await getTopicBreakdown();

    setEntries(e.data);
    setTopics(t.data);
  };

  useEffect(() => {
    load();
  }, []);

  const removeEntry = async (id) => {
    await deleteEntry(id);
    load();
  };

  return (
    <DashboardLayout
      sidebar={
        <Sidebar
          entries={entries}
          openModal={() => setModal(true)}
          editEntry={(e) => {
            setEdit(e);
            setModal(true);
          }}
          removeEntry={removeEntry}
        />
      }
    >
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>

      <TopicChart data={topics} />

      {modal && (
        <EntryModal
          close={() => {
            setModal(false);
            setEdit(null);
          }}
          refresh={load}
          edit={edit}
        />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
