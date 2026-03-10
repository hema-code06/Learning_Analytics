import { useState } from "react";
import { createEntry } from "../api";

const EntryForm = ({ refresh }) => {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await createEntry({
      topic,
      date,
      hours: Number(hours),
    });

    setTopic("");
    setDate("");
    setHours("");

    refresh();
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="font-bold mb-4">Add Learning Entry</h2>
      <div className="grid grid-cols-3 gap-4">
        <input
          placeholder="Topic (Skill)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border p-2"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2"
          required
        />

        <input
          type="number"
          step="0.5"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="border p-2"
          required
        />
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2">Save</button>
    </form>
  );
};

export default EntryForm;
