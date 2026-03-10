const SmartInsights = ({ insights }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold">Smart Insights</h2>
      <p>
        Most Learned Topic:
        {insights.most_learned_topic}
      </p>
    </div>
  );
};

export default SmartInsights;
