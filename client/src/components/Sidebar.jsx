import { motion } from "framer-motion";
import EntryList from "./EntryList";

const Sidebar = ({
  entries = [],
  openModal = () => {},
  editEntry = () => {},
  removeEntry = () => {},
}) => {
  return (
    <div className="w-72 bg-white border-r shadow-sm flex flex-col h-screen sticky top-0">
      {/* App Title */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-800">Learning Analytics</h1>
      </div>

      {/* Add Entry Button */}
      <div className="p-5">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={openModal}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Entry
        </motion.button>
      </div>

      {/* Entries List */}
      <div className="flex-1 overflow-y-auto px-5 pb-5">
        <h3 className="text-sm text-gray-500 mb-3">Learning Entries</h3>

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
