import { motion } from "framer-motion";
import { FaBrain, FaClock, FaFire, FaChartLine } from "react-icons/fa";

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
      <h3 className="font-semibold text-gray-700 text-lg mb-4">
        Smart Insights
      </h3>

      {insights.length === 0 ? (
        <p className="text-gray-400 text-sm">No insights available yet</p>
      ) : (
        <ul className="space-y-3">
          {insights.map((insight, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <span className="text-lg">{icons[i % icons.length]}</span>

              <span>{insight}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default SmartInsights;
