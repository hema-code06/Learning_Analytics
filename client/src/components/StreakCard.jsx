import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const StreakCard = ({ current = 0, best = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full bg-white p-5 rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] flex flex-col justify-between"
    >
      <h3 className="text-[#16211D]/60 font-medium text-sm">Current streak</h3>

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-lg bg-[#B5583B]/10 text-[#B5583B] flex items-center justify-center shrink-0">
          <FaFire className="text-xl" />
        </div>
        <p className="font-display text-3xl font-semibold text-[#16211D]">{current}<span className="text-base font-sans text-[#16211D]/40 ml-1">days</span></p>
      </div>

      <p className="text-xs text-[#16211D]/45">
        Best streak: <span className="font-medium text-[#16211D]/70">{best} days</span>
      </p>
    </motion.div>
  );
};

export default StreakCard;
