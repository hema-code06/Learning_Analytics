import { useEffect, useState } from "react";
import { getStudyTime } from "../../api";

const StudyTime = () => {
  const [mode, setMode] = useState("daily");
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, [mode]);
  const load = async () => {
    const res = await getStudyTime(mode);
    setData(res.data);
  };

  return (
    <div className="bg-white p-4 shadow mb-6">
      <div className="flex justify-between mb-3">
        <h2 className="font-bold">Study Time</h2>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border p-1"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {data.map((d, i) => (
        <div key={i} className="flex justify-between">
          <span>{d[0]}</span>
          <span>{d[1]} hrs</span>
        </div>
      ))}
    </div>
  );
};

export default StudyTime;
