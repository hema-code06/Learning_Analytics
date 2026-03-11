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

import { getEntries, deleteEntry } from "../api";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editEntry, setEditEntry] = useState(null);

  const loadEntries = async () => {
    try {
      const res = await getEntries();
      setEntries(res.data);
    } catch (err) {
      console.error("Error loading entries", err);
    }
  };

  useEffect(() => {
    loadEntries();
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
      toast.success("Entry Deleted..");
      loadEntries();
    } catch (err) {
      toast.error("Deletion failed!!");
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
        {/* Row 1 */}
        <OverviewCards />

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-6">
          <SkillDeveloped />
          <StudyTimeChart />
          <TopicChart />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-4 gap-6">
          <StreakCard />
          <MonthlyGoal />
          <ConsistencyScore />
          <SmartInsights />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-2 gap-6">
          <AveragePerformance />
        </div>
      </div>

      {modalOpen && (
        <EntryModal close={closeModal} refresh={loadEntries} edit={editEntry} />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
