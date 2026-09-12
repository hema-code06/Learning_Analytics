import { motion } from "framer-motion";
import { HiOutlineClock, HiOutlineLightBulb, HiOutlineBookOpen, HiOutlineChartBar } from "react-icons/hi";

const OverviewCards = ({ data }) => {
  if (!data) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] text-[#16211D]/40 text-sm">
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
      accent: "border-[#1F6F5C]",
      iconBg: "bg-[#EAF3EF] text-[#175447]",
    },
    {
      title: "Skills developed",
      value: data.skills ?? 0,
      icon: HiOutlineLightBulb,
      accent: "border-[#C4872B]",
      iconBg: "bg-[#D9A441]/15 text-[#A16A1E]",
    },
    {
      title: "Topics covered",
      value: data.topics ?? 0,
      icon: HiOutlineBookOpen,
      accent: "border-[#16211D]/30",
      iconBg: "bg-[#16211D]/5 text-[#16211D]/70",
    },
    {
      title: "Consistency",
      value: `${data.score ?? 0}%`,
      icon: HiOutlineChartBar,
      accent: "border-[#B5583B]",
      iconBg: "bg-[#B5583B]/10 text-[#B5583B]",
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
          className={`bg-white rounded-[1.1rem] shadow-[0_1px_2px_rgba(22,33,29,0.04),0_8px_24px_-12px_rgba(22,33,29,0.18)] border-l-4 ${c.accent} p-4 flex items-center gap-4`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${c.iconBg}`}>
            <c.icon className="text-xl" />
          </div>
          <div className="min-w-0">
            <p className="text-[#16211D]/50 text-xs font-medium truncate">{c.title}</p>
            <p className="font-display text-2xl font-semibold text-[#16211D] leading-tight">
              {c.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
