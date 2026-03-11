import { motion } from "framer-motion";

const SkillDeveloped = ({ skills = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <h2 className="font-semibold text-gray-700 text-lg mb-4">
        Skills Developed
      </h2>

      {skills.length === 0 ? (
        <p className="text-gray-400 text-sm">No skills analytics available</p>
      ) : (
        <div className="space-y-2">
          {skills.map((s, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-sm border-b border-gray-100 pb-1"
            >
              <span className="text-gray-700 font-medium">{s.skill}</span>

              <span className="text-gray-500">{s.hours} hrs</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillDeveloped;
