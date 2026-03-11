import { motion } from "framer-motion";

const OverviewCards = ({ data }) => {
  if (!data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md text-gray-400 text-sm">
          No overview analytics available
        </div>
      </div>
    );
  }

  const cards = [
    {
      title: "Learning Hours",
      value: data.total_hours,
      color: "text-blue-600",
    },
    {
      title: "Skills Developed",
      value: data.skills,
      color: "text-green-600",
    },
    {
      title: "Topics Covered",
      value: data.topics,
      color: "text-purple-600",
    },
    {
      title: "Consistency",
      value: `${data.consistency}%`,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-gray-500 text-sm font-medium">{c.title}</h3>

          <p className={`text-3xl font-bold mt-2 ${c.color}`}>{c.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
