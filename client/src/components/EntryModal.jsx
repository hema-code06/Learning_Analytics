import { useEffect, useState } from "react";
import { createEntry, updateEntry } from "../api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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

    try {
      if (edit) {
        await updateEntry(edit.id, data);
        toast.success("Entry updated");
      } else {
        await createEntry(data);
        toast.success("Entry added");
      }

      refresh();
      close();
    } catch (err) {
      toast.error("Operation failed");
      console.error(err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={close}
    >
      <motion.form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl shadow-xl w-[380px] p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          {edit ? "Edit Learning Entry" : "Add Learning Entry"}
        </h2>

        <input
          placeholder="Topic / Skill"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
          className="border border-gray-300 rounded-lg w-full px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border border-gray-300 rounded-lg w-full px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Study Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
          className="border border-gray-300 rounded-lg w-full px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default EntryModal;
