import { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";
import { getStudyTime } from "../../api";

const StudyTimeChart = ({ data = [] }) => {
  const [mode, setMode] = useState("daily");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadChartData();
  }, [mode]);

  const loadChartData = async () => {
    try {
      const res = await getStudyTime(mode);
      setChartData(res.data);
    } catch (err) {
      console.error("Failed loading study time analytics", err);
    }
  };

  const renderData = chartData.length ? chartData : data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-gray-700 text-lg">Study Time</h3>

        <select
          className="border border-gray-300 text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={renderData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          <Tooltip
            cursor={{ fill: "#f3f4f6" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          <Bar
            dataKey="hours"
            fill="#3B82F6"
            radius={[6, 6, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default StudyTimeChart;
