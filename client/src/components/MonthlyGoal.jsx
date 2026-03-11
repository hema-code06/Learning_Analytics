const MonthlyGoal = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h3 className="mb-3 font-semibold">Monthly Goal</h3>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-green-500 h-3 rounded-full w-3/4"/>
      </div>

      <p className="text-sm mt-2">
        75% completed
      </p>

    </div>
  );
};

export default MonthlyGoal;