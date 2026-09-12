import { motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import EntryList from "./EntryList";

const Sidebar = ({
  entries = [],
  openModal = () => {},
  editEntry = () => {},
  removeEntry = () => {},
}) => {
  return (
    <div className="w-72 bg-ink h-screen sticky top-0 flex flex-col text-white">
      <div className="flex items-center gap-3 px-6 py-6">
        <img src="/logo_analytics.png" alt="logo" className="w-8 h-8 rounded-md" />
        <h1 className="font-display text-xl font-semibold tracking-tight">
          Learnlytics
        </h1>
      </div>

      <div className="px-5">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={openModal}
          className="w-full flex items-center justify-center gap-2 bg-gold-500 text-ink py-2.5 rounded-lg font-medium hover:bg-gold-400 transition-colors"
        >
          <HiPlus className="text-lg" />
          Log a session
        </motion.button>
      </div>

      <div className="px-6 pt-7 pb-2">
        <p className="text-xs font-medium text-white/45">Recent sessions</p>
      </div>

      <div className="flex-1 overflow-y-auto scroll-thin-dark px-5 pb-6">
        <EntryList
          entries={entries}
          editEntry={editEntry}
          removeEntry={removeEntry}
        />
      </div>
    </div>
  );
};

export default Sidebar;
