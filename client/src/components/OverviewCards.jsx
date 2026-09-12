import { motion } from "framer-motion";
import { HiOutlineClock, HiOutlineLightBulb, HiOutlineBookOpen, HiOutlineChartBar } from "react-icons/hi";

const OverviewCards = ({ data }) => {
  if (!data) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl2 shadow-card text-ink/40 text-sm">
          No overview analytics available
        </div>
      </div>
    );
  }

  const cards = [
    {
      title: "Learning hours",
      value: data.total_hours ?? 0,
      icon: HiOutlineClock,
      accent: "border-forest-600",
      iconBg: "bg-forest-50 text-forest-700",
    },
    {
      title: "Skills developed",
      value: data.skills ?? 0,
      icon: HiOutlineLightBulb,
      accent: "border-gold-500",
      iconBg: "bg-gold-400/15 text-gold-600",
    },
    {
      title: "Topics covered",
      value: data.topics ?? 0,
      icon: HiOutlineBookOpen,
      accent: "border-ink/30",
      iconBg: "bg-ink/5 text-ink/70",
    },
    {
      title: "Consistency",
      value: `${data.score ?? 0}%`,
      icon: HiOutlineChartBar,
      accent: "border-rust",
      iconBg: "bg-rust/10 text-rust",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.06 }}
          className={`bg-white rounded-xl2 shadow-card border-l-4 ${c.accent} p-4 flex items-center gap-4`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${c.iconBg}`}>
            <c.icon className="text-xl" />
          </div>
          <div className="min-w-0">
            <p className="text-ink/50 text-xs font-medium truncate">{c.title}</p>
            <p className="font-display text-2xl font-semibold text-ink leading-tight">
              {c.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
