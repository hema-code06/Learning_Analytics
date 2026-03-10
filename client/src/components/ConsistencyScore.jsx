const ConsistencyScore = ({ score }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold">Consistency Score</h2>
      <p>{score}%</p>
    </div>
  );
};

export default ConsistencyScore;
