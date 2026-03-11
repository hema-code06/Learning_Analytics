import { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const StudyTimeChart = ({ data = [] }) => {

  const [mode, setMode] = useState("daily");

  const defaultData = [
    { name: "Mon", hours: 2 },
    { name: "Tue", hours: 3 },
    { name: "Wed", hours: 5 },
    { name: "Thu", hours: 4 },
    { name: "Fri", hours: 6 },
  ];

  const chartData = data.length ? data : defaultData;

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Study Time</h3>

        <select
          className="border p-1 rounded"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default StudyTimeChart;