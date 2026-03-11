import EntryList from "./EntryList";

const Sidebar = ({ entries, openModal, editEntry, removeEntry }) => {
  return (
    <div className="w-72 bg-white shadow-lg p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Learning Analytics</h1>

      <button
        onClick={openModal}
        className="bg-blue-600 text-white py-2 rounded mb-4"
      >
        Add Entry
      </button>

      <EntryList
        entries={entries}
        editEntry={editEntry}
        removeEntry={removeEntry}
      />
    </div>
  );
};

export default Sidebar;
