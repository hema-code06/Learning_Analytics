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
      <div className="h-full bg-white p-5 rounded-xl2 shadow-card text-ink/40 text-sm flex items-center justify-center">
        No skills analytics available
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full bg-white p-5 rounded-xl2 shadow-card flex flex-col"
    >
      <h2 className="font-display font-semibold text-ink mb-1">Skills developed</h2>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={skills}>
            <PolarGrid stroke="#E7E6DF" />
            <PolarAngleAxis dataKey="name" tick={{ fontSize: 11, fill: "#6B7280" }} />
            <Radar
              name="Skill"
              dataKey="value"
              stroke="#1F6F5C"
              fill="#1F6F5C"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SkillDeveloped;
