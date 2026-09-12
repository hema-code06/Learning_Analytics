import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const LearningOverview = ({ overview, studyTime }) => {
  if (!studyTime || studyTime.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md text-gray-400 text-sm">
        No analytics data available
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Learning Overview
          </h3>
          <p className="text-gray-400 text-sm">
            Track your learning progress over time
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <p className="text-xs text-gray-400">Sessions</p>
            <p className="text-xl font-bold text-blue-600">
              {overview.total_sessions}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Hours</p>
            <p className="text-xl font-bold text-green-600">
              {overview.total_hours}
            </p>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={studyTime}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />

          <XAxis dataKey="period" tick={{ fontSize: 12 }} stroke="#9CA3AF" />

          <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="hours"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default LearningOverview;
