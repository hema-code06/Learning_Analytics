import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const AveragePerformance = ({ data = [] }) => {

  const defaultData = [
    { name: "Completed", value: 80 },
    { name: "Remaining", value: 20 },
  ];

  const chartData = data.length ? data : defaultData;

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h3 className="font-semibold mb-4">
        Average Performance
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
          />

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default AveragePerformance;