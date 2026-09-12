import { FaTrash, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

const EntryList = ({ entries = [], editEntry, removeEntry }) => {
  return (
    <div className="overflow-y-auto flex-1 pr-1 space-y-2">
      {entries.length === 0 ? (
        <p className="text-gray-400 text-sm text-center mt-6">No entries yet</p>
      ) : (
        entries.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-50 hover:bg-gray-100 border border-gray-200
                       p-3 rounded-lg flex justify-between items-center
                       transition"
          >
            <div className="text-left">
              <p className="font-semibold text-gray-800">{e.topic}</p>

              <p className="text-xs text-gray-500">
                {e.hours} hrs
                {e.date && ` • ${e.date}`}
              </p>
            </div>

            <div className="flex gap-3">
              <FaEdit
                className="cursor-pointer text-blue-500 hover:text-blue-600 transition"
                onClick={() => editEntry?.(e)}
              />

              <FaTrash
                className="cursor-pointer text-red-500 hover:text-red-600 transition"
                onClick={() => removeEntry?.(e.id)}
              />
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default EntryList;
