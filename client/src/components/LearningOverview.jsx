import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const LearningOverview = ({ overview, studyTime }) => {
  if (!studyTime || studyTime.length === 0) {
    return (
      <div className="h-full bg-white p-6 rounded-xl2 shadow-card text-ink/40 text-sm flex items-center justify-center">
        Log a session to start seeing your learning curve.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full bg-white p-6 rounded-xl2 shadow-card flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            Your learning curve
          </h3>
          <p className="text-ink/45 text-sm mt-0.5">
            Hours studied over time
          </p>
        </div>

        <div className="flex gap-6 shrink-0">
          <div>
            <p className="text-xs text-ink/40">Sessions</p>
            <p className="font-display text-xl font-semibold text-forest-700">
              {overview.total_sessions}
            </p>
          </div>
          <div>
            <p className="text-xs text-ink/40">Hours</p>
            <p className="font-display text-xl font-semibold text-gold-600">
              {overview.total_hours}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={studyTime} margin={{ left: -18, top: 4, right: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1F6F5C" stopOpacity={0.32} />
                <stop offset="100%" stopColor="#1F6F5C" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E7E6DF" vertical={false} />
            <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#8A9089" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#8A9089" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: 10, border: "1px solid #E7E6DF", fontSize: 13 }}
            />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#1F6F5C"
              strokeWidth={2.5}
              fill="url(#curveFill)"
              dot={{ r: 3, fill: "#1F6F5C", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default LearningOverview;
