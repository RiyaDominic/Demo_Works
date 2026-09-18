function SkillsSection({ skills }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        Skills
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;