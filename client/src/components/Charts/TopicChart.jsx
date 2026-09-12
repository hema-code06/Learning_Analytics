import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";

const COLORS = ["#1F6F5C", "#D9A441", "#B5583B", "#7FB39D", "#8A9089", "#233029"];

const TopicChart = ({ data = [] }) => {
  const total = data.reduce((sum, d) => sum + (d.value || 0), 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full bg-white p-5 rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] flex flex-col"
    >
      <h3 className="font-display font-semibold text-[#16211D] mb-1">Topic split</h3>

      {data.length === 0 ? (
        <p className="text-[#16211D]/40 text-sm flex-1 flex items-center justify-center">
          No topic analytics available
        </p>
      ) : (
        <div className="flex-1 min-h-0 relative flex items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius="78%"
                innerRadius="52%"
                paddingAngle={3}
                animationDuration={800}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "1px solid #E7E6DF",
                  fontSize: 13,
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="font-display text-xl font-semibold text-[#16211D]">{total}</p>
            <p className="text-[11px] text-[#16211D]/45">hours</p>
          </div>
        </div>
      )}

      {data.length > 0 && (
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 justify-center">
          {data.slice(0, 4).map((d, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[11px] text-[#16211D]/60">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              {d.name}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TopicChart;
