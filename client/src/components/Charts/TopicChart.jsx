import { PieChart, Pie, Cell, Tooltip } from "recharts";

const TopicChart = ({ data }) => {
  const chart = data.map((d) => ({
    name: d.topic,
    value: d.count,
  }));
  return (
    <PieChart width={300} height={250}>
      <Pie data={chart} dataKey="value" nameKey="name" outerRadius={90}>
        {chart.map((_, i) => (
          <Cell key={i} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default TopicChart;
