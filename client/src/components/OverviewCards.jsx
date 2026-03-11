import { motion } from "framer-motion";

const OverviewCards = () => {
  const cards = [
    { title: "Learning Hours", value: "120" },
    { title: "Skills Developed", value: "8" },
    { title: "Topics Covered", value: "25" },
    { title: "Consistency", value: "82%" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <h3 className="text-gray-500">{c.title}</h3>
          <p className="text-3xl font-bold mt-2">{c.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
