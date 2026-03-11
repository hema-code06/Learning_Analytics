import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TopicChart = ({ data = [] }) => {

  const defaultData = [
    { name: "React", value: 5 },
    { name: "Python", value: 3 },
    { name: "SQL", value: 4 },
  ];

  const chartData = data.length ? data : defaultData;

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h3 className="font-semibold mb-4">Topic Breakdown</h3>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
          >
            {chartData.map((_, i) => (
              <Cell key={i} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default TopicChart;