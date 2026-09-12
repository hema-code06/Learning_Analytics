import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const SkillDeveloped = ({ skills = [] }) => {
  if (!skills || skills.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md text-gray-400 text-sm">
        No skills analytics available
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-700 text-lg">
          Skills Developed
        </h2>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <RadarChart data={skills}>
          <PolarGrid stroke="#E5E7EB" />

          <PolarAngleAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />

          <Radar
            name="Skill"
            dataKey="value"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SkillDeveloped;
