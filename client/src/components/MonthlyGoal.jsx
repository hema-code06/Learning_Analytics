import { useState } from "react";
import { motion } from "framer-motion";
import { setMonthlyGoal } from "../api";

const MonthlyGoal = ({ data, refresh }) => {
  const [goalInput, setGoalInput] = useState("");

  if (!data) return null;

  const progress =
    data.goal > 0 ? Math.min((data.completed / data.goal) * 100, 100) : 0;

  const saveGoal = async () => {
    if (!goalInput) return;

    await setMonthlyGoal(Number(goalInput));
    setGoalInput("");
    refresh();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <h3 className="font-semibold text-gray-700 text-lg mb-3">Monthly Goal</h3>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Hours"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          className="border rounded-lg px-3 py-1 text-sm w-full"
        />

        <button
          onClick={saveGoal}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
        >
          Save
        </button>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
          className="bg-green-500 h-2"
        />
      </div>

      <p className="text-xs text-gray-600 mt-2">
        {data.completed} / {data.goal} hrs
      </p>
    </motion.div>
  );
};

export default MonthlyGoal;
