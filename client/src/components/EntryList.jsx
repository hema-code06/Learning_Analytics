import { FaTrash, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";

const EntryList = ({ entries = [], editEntry, removeEntry }) => {
  return (
    <div className="space-y-2">
      {entries.length === 0 ? (
        <p className="text-white/40 text-sm text-center mt-6">
          Log your first session to see it here.
        </p>
      ) : (
        entries.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="group bg-white/5 hover:bg-white/10 border border-white/10
                       p-3 rounded-lg flex justify-between items-center transition-colors"
          >
            <div className="text-left min-w-0">
              <p className="font-medium text-white truncate">{e.topic}</p>
              <p className="text-xs text-white/45">
                {e.hours} hrs
                {e.date && ` · ${e.date}`}
              </p>
            </div>

            <div className="flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity shrink-0 pl-2">
              <FaEdit
                className="cursor-pointer text-[#D9A441] hover:text-[#C4872B] transition-colors"
                onClick={() => editEntry?.(e)}
              />
              <FaTrash
                className="cursor-pointer text-white/50 hover:text-[#B5583B] transition-colors"
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
