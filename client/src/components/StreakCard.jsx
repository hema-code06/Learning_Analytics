import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const StreakCard = ({ current = 0, best = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full bg-white p-5 rounded-xl2 shadow-card flex flex-col justify-between"
    >
      <h3 className="text-ink/60 font-medium text-sm">Current streak</h3>

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-lg bg-rust/10 text-rust flex items-center justify-center shrink-0">
          <FaFire className="text-xl" />
        </div>
        <p className="font-display text-3xl font-semibold text-ink">{current}<span className="text-base font-sans text-ink/40 ml-1">days</span></p>
      </div>

      <p className="text-xs text-ink/45">
        Best streak: <span className="font-medium text-ink/70">{best} days</span>
      </p>
    </motion.div>
  );
};

export default StreakCard;
