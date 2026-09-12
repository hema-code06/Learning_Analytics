import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const StreakCard = ({ current = 0, best = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col"
    >
      <h3 className="text-gray-600 font-semibold text-lg mb-3">
        Current Streak
      </h3>

      <div className="flex items-center gap-3">
        <FaFire className="text-orange-500 text-3xl" />

        <p className="text-3xl font-bold text-gray-800">{current} days</p>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Best streak: <span className="font-semibold">{best} days</span>
      </p>
    </motion.div>
  );
};

export default StreakCard;
