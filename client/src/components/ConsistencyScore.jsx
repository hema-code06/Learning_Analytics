import { motion } from "framer-motion";

const ConsistencyScore = ({ data }) => {
  if (!data || data.consistency_score === undefined) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-gray-600 font-semibold mb-4">Consistency Score</h3>

        <p className="text-gray-400 text-sm">
          No consistency analytics available
        </p>
      </div>
    );
  }

  const score = Number(data?.consistency_score || 0);

  const radius = 60;
  const stroke = 10;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
    >
      <h3 className="text-gray-600 font-semibold mb-4">Consistency Score</h3>

      <svg height={radius * 2} width={radius * 2} className="mb-3">
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#3B82F6"
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

      <p className="text-3xl font-bold text-gray-800">{score.toFixed(1)}%</p>
    </motion.div>
  );
};

export default ConsistencyScore;
