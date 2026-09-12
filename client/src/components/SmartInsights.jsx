import { motion } from "framer-motion";
import { FaBrain, FaClock, FaFire, FaChartLine, FaSync } from "react-icons/fa";

const SmartInsights = ({ data = [] }) => {
  const insights = Array.isArray(data) ? data : [];

  const icons = [
    <FaFire className="text-orange-500" />,
    <FaChartLine className="text-purple-500" />,
    <FaClock className="text-blue-500" />,
    <FaBrain className="text-green-500" />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700 text-lg flex items-center gap-2">
          <FaBrain className="text-indigo-500" />
          Smart Insights
        </h3>
      </div>

      {insights.length === 0 ? (
        <p className="text-gray-400 text-sm">
          Your learning insights will appear here 🚀
        </p>
      ) : (
        <ul className="space-y-3">
          {insights.map((insight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
              <span className="text-lg">{icons[i % icons.length]}</span>
              <span>{insight}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default SmartInsights;
