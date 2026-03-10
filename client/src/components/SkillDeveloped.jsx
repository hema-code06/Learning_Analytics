const SkillDeveloped = ({ skills }) => {
  return (
    <div className="bg-white p-4 shadow mb-6">
      <h2 className="font-bold mb-3">Skill Developed</h2>
      {skills.map((s, i) => (
        <div key={i} className="flex justify-between">
          <span>{s[0]}</span>
          <span>{s[1]} hrs</span>
        </div>
      ))}
    </div>
  );
};

export default SkillDeveloped;
