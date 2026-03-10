const AveragePerformance = ({ avg }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold">Average Performance</h2>
      <p>{avg} hours per session</p>
    </div>
  );
};

export default AveragePerformance;
