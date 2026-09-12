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
      className="fixed inset-0 bg-[#16211D]/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={close}
    >
      <motion.form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-[1.1rem] shadow-2xl w-[380px] p-6"
      >
        <h2 className="font-display text-xl font-semibold text-[#16211D] mb-5">
          {edit ? "Edit learning entry" : "Log a learning session"}
        </h2>

        <label className="text-xs font-medium text-[#16211D]/50 mb-1 block">Topic / skill</label>
        <input
          placeholder="e.g. React hooks"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
          className="border border-[#16211D]/15 rounded-lg w-full px-3 py-2 mb-3 bg-[#F4F5F0] focus:outline-none focus:ring-2 focus:ring-[#2F9E82]"
        />

        <label className="text-xs font-medium text-[#16211D]/50 mb-1 block">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border border-[#16211D]/15 rounded-lg w-full px-3 py-2 mb-3 bg-[#F4F5F0] focus:outline-none focus:ring-2 focus:ring-[#2F9E82]"
        />

        <label className="text-xs font-medium text-[#16211D]/50 mb-1 block">Study hours</label>
        <input
          type="number"
          step="0.5"
          placeholder="e.g. 1.5"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
          className="border border-[#16211D]/15 rounded-lg w-full px-3 py-2 mb-6 bg-[#F4F5F0] focus:outline-none focus:ring-2 focus:ring-[#2F9E82]"
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 rounded-lg border border-[#16211D]/15 text-[#16211D]/70 hover:bg-[#F4F5F0] transition-colors"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#1F6F5C] text-white font-medium hover:bg-[#175447] transition-colors"
          >
            Save
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default EntryModal;
