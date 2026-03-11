import { useEffect, useState } from "react";
import { createEntry, updateEntry } from "../api";

const EntryModal = ({ close, refresh, edit }) => {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    if (edit) {
      setTopic(edit.topic);
      setDate(edit.date);
      setHours(edit.hours);
    }
  }, [edit]);

  const submit = async (e) => {
    e.preventDefault();

    const data = { topic, date, hours: Number(hours) };
    if (edit) {
      await updateEntry(edit.id, data);
    } else {
      await createEntry(data);
    }
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <form onSubmit={submit} className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Learning Entry</h2>

        <input
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border w-full p-2 mb-3"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border w-full p-2 mb-3"
        />

        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="border w-full p-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={close} className="px-4 py-2 border">
            Cancel
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EntryModal;
