function OverviewCard({ title, value, description, color = "blue" }) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div
        className={`mb-4 inline-flex rounded-lg px-3 py-2 text-sm font-medium ${
          colorStyles[color] || colorStyles.blue
        }`}
      >
        {title}
      </div>

      <h2 className="text-3xl font-bold text-gray-900">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default OverviewCard;