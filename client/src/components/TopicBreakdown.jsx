const TopicBreakdown = ({ topics }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold mb-3">Topic Breakdown</h2>
      {topics.map((t, i) => (
        <div key={i} className="flex justify-between">
          <span>{t[0]}</span>
          <span>{t[1]}</span>
        </div>
      ))}
    </div>
  );
};

export default TopicBreakdown;
