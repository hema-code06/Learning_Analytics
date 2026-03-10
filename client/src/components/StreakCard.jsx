const StreakCard = ({ streak }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold">Current Streak</h2>
      <p className="text-2xl font-bold">{streak} days</p>
    </div>
  );
};

export default StreakCard;
