const OverviewCards = ({ overview }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 shadow">
        <p>Total Hours</p>
        <h2 className="text-2xl font-bold">{overview.total_hours}</h2>
      </div>

      <div className="bg-white p-4 shadow">
        <p>Total Sessions</p>
        <h2 className="text-2xl font-bold">{overview.total_sessions}</h2>
      </div>
    </div>
  );
};

export default OverviewCards;
