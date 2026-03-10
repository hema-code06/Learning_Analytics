const MonthlyGoal = ({ goal }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold">Monthly Goal</h2>
      <p>
        {goal.completed} / {goal.goal} hours
      </p>
    </div>
  );
};

export default MonthlyGoal;
