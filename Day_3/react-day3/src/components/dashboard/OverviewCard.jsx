
function OverviewCard({ title, value, description, color = "blue" }) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  const badgeStyle = colorStyles[color] || colorStyles.blue;

  return (
    <article className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md sm:p-6">
      <div
        className={`mb-4 inline-flex rounded-lg px-3 py-2 text-sm font-medium ${badgeStyle}`}
      >
        {title}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </article>
  );
}

export default OverviewCard;