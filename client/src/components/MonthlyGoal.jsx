import { useState } from "react";
import { motion } from "framer-motion";
import { setMonthlyGoal } from "../api";

const MonthlyGoal = ({ data, refresh }) => {
  const [goalInput, setGoalInput] = useState("");

  if (!data) return null;

  const goal = Number(data.goal) || 0;
  const completed = Number(data.completed) || 0;

  const progress = goal > 0 ? Math.min((completed / goal) * 100, 100) : 0;

  const saveGoal = async () => {
    if (!goalInput) return;

    await setMonthlyGoal(Number(goalInput));
    setGoalInput("");
    refresh();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full bg-white p-5 rounded-xl2 shadow-card flex flex-col justify-between"
    >
      <div>
        <h3 className="text-ink/60 font-medium text-sm mb-2">Monthly goal</h3>

        <div className="flex gap-2 mb-3">
          <input
            type="number"
            placeholder="Hours"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            className="border border-ink/15 rounded-lg px-3 py-1.5 text-sm w-full bg-paper focus:outline-none focus:ring-2 focus:ring-forest-500"
          />

          <button
            onClick={saveGoal}
            className="bg-forest-600 hover:bg-forest-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors shrink-0"
          >
            Save
          </button>
        </div>
      </div>

      <div>
        <div className="w-full bg-ink/10 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8 }}
            className="bg-forest-500 h-2"
          />
        </div>

        <p className="text-xs text-ink/50 mt-2">
          {data.completed} / {data.goal} hrs
        </p>
      </div>
    </motion.div>
  );
};

export default MonthlyGoal;
