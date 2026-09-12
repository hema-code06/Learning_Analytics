import { motion } from "framer-motion";
import { FaBrain, FaClock, FaFire, FaChartLine } from "react-icons/fa";

const SmartInsights = ({ data = [] }) => {
  const insights = Array.isArray(data) ? data : [];

  const icons = [
    <FaFire key="fire" className="text-[#B5583B]" />,
    <FaChartLine key="chart" className="text-[#1F6F5C]" />,
    <FaClock key="clock" className="text-[#C4872B]" />,
    <FaBrain key="brain" className="text-[#16211D]/60" />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full bg-white px-5 py-4 rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] flex items-center gap-4"
    >
      <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-[#16211D]/10">
        <FaBrain className="text-[#1F6F5C]" />
        <h3 className="font-display font-semibold text-[#16211D] whitespace-nowrap">
          Smart insights
        </h3>
      </div>

      {insights.length === 0 ? (
        <p className="text-[#16211D]/40 text-sm">Your learning insights will appear here.</p>
      ) : (
        <div className="flex-1 min-w-0 flex gap-3 overflow-x-auto scroll-thin py-1">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 text-sm text-[#16211D]/75 bg-[#F4F5F0] px-3 py-2 rounded-lg whitespace-nowrap shrink-0"
            >
              <span>{icons[i % icons.length]}</span>
              <span>{insight}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SmartInsights;
