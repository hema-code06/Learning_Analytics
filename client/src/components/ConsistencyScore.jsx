import { useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ConsistencyScore = ({ data }) => {
  useEffect(() => {
    if (data?.message) {
      toast.info(data.message);
    }
  }, [data]);

  if (!data || data.score === undefined) {
    return (
      <div className="h-full bg-white p-5 rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] flex flex-col">
        <h3 className="text-[#16211D]/60 font-medium text-sm mb-3">Consistency score</h3>
        <p className="text-[#16211D]/40 text-sm">No consistency analytics available</p>
      </div>
    );
  }

  const score = Number(data?.score || 0);

  const radius = 42;
  const stroke = 8;

  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full bg-white p-5 rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] flex flex-col items-center justify-center gap-2"
    >
      <h3 className="text-[#16211D]/60 font-medium text-sm self-start">Consistency score</h3>

      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#EDECE4"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#1F6F5C"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>
        <p className="absolute font-display text-xl font-semibold text-[#16211D]">
          {score.toFixed(0)}%
        </p>
      </div>

      <p className="text-xs text-[#16211D]/45 text-center">
        {data.learning_days} / {data.days_passed} recent active days
      </p>
    </motion.div>
  );
};

export default ConsistencyScore;
