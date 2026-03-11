import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const StudyTimeChart = ({ data }) => {
  const chart = data.map((d) => ({
    date: d[0],
    hours: d[1],
  }));
  return (
    <BarChart width={500} height={250} data={chart}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="hours" />
    </BarChart>
  );
};

export default StudyTimeChart;
