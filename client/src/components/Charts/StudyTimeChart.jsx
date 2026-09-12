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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full bg-white p-5 rounded-xl2 shadow-card flex flex-col"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-display font-semibold text-ink">Study time</h3>

        <select
          className="border border-ink/15 text-xs px-2.5 py-1 rounded-md bg-paper text-ink/70 focus:outline-none focus:ring-2 focus:ring-forest-500"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={renderData}>
            <defs>
              <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D9A441" />
                <stop offset="100%" stopColor="#C4872B" />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E7E6DF" />

            <XAxis
              dataKey="period"
              tick={{ fontSize: 11, fill: "#8A9089" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 11, fill: "#8A9089" }} axisLine={false} tickLine={false} />

            <Tooltip
              cursor={{ fill: "#F4F5F0" }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E7E6DF",
                fontSize: 13,
              }}
            />

            <Bar
              dataKey="hours"
              fill="url(#barFill)"
              radius={[6, 6, 0, 0]}
              animationDuration={700}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default StudyTimeChart;
