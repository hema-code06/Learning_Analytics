import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { motion } from "framer-motion";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

const TopicChart = ({ data = [] }) => {
  const defaultData = [
    { name: "React", value: 5 },
    { name: "Python", value: 3 },
    { name: "SQL", value: 4 },
  ];

  const chartData = data.length ? data : defaultData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <h3 className="font-semibold text-gray-700 text-lg mb-5">
        Topic Breakdown
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={85}
            innerRadius={40}
            paddingAngle={4}
            animationDuration={900}
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default TopicChart;
