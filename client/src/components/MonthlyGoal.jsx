import { motion } from "framer-motion";

const MonthlyGoal = ({ data }) => {
  if (!data || data.progress === undefined) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="mb-4 font-semibold text-gray-700 text-lg">
          Monthly Goal
        </h3>

        <p className="text-gray-400 text-sm">
          No monthly goal analytics available
        </p>
      </div>
    );
  }

  const progress = data.progress;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <h3 className="mb-4 font-semibold text-gray-700 text-lg">Monthly Goal</h3>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
          className="bg-green-500 h-3 rounded-full"
        />
      </div>

      <p className="text-sm text-gray-600 mt-3">{progress}% completed</p>
    </motion.div>
  );
};

export default MonthlyGoal;
