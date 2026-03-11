import { FaTrash, FaEdit } from "react-icons/fa";

const EntryList = ({ entries = [], editEntry, removeEntry }) => {
  return (
    <div className="overflow-y-auto">
      {entries.length === 0 ? (
        <p className="text-gray-400 text-sm">No entries yet</p>
      ) : (
        entries.map((e) => (
          <div
            key={e.id}
            className="border p-3 mb-2 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{e.topic}</p>
              <p className="text-sm">{e.hours} hrs</p>
            </div>

            <div className="flex gap-2">
              <FaEdit
                className="cursor-pointer text-blue-500"
                onClick={() => editEntry?.(e)}
              />

              <FaTrash
                className="cursor-pointer text-red-500"
                onClick={() => removeEntry?.(e.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EntryList;