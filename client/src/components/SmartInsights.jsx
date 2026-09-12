import { motion } from "framer-motion";
import { FaBrain, FaClock, FaFire, FaChartLine } from "react-icons/fa";

const SmartInsights = ({ data = [] }) => {
  const insights = Array.isArray(data) ? data : [];

  const icons = [
    <FaFire key="fire" className="text-rust" />,
    <FaChartLine key="chart" className="text-forest-600" />,
    <FaClock key="clock" className="text-gold-500" />,
    <FaBrain key="brain" className="text-ink/60" />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full bg-white px-5 py-4 rounded-xl2 shadow-card flex items-center gap-4"
    >
      <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-ink/10">
        <FaBrain className="text-forest-600" />
        <h3 className="font-display font-semibold text-ink whitespace-nowrap">
          Smart insights
        </h3>
      </div>

      {insights.length === 0 ? (
        <p className="text-ink/40 text-sm">Your learning insights will appear here.</p>
      ) : (
        <div className="flex-1 min-w-0 flex gap-3 overflow-x-auto scroll-thin py-1">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 text-sm text-ink/75 bg-paper px-3 py-2 rounded-lg whitespace-nowrap shrink-0"
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
