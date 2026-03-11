const SkillDeveloped = ({ skills = [] }) => {
  return (
    <div className="bg-white p-4 shadow mb-6 rounded-lg">
      <h2 className="font-bold mb-3">Skill Developed</h2>

      {skills.length === 0 ? (
        <p className="text-gray-400 text-sm">No skills data yet</p>
      ) : (
        skills.map((s, i) => (
          <div key={i} className="flex justify-between py-1">
            <span>{s[0]}</span>
            <span>{s[1]} hrs</span>
          </div>
        ))
      )}
    </div>
  );
};

export default SkillDeveloped;