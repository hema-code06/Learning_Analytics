import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

import { motion } from "framer-motion";

const COLORS = ["#10B981", "#E5E7EB"];

const AveragePerformance = ({ data = [] }) => {
  const defaultData = [
    { name: "Completed", value: 80 },
    { name: "Remaining", value: 20 },
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
        Average Performance
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
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

          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AveragePerformance;
