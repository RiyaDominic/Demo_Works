function PlaceholderPage({ title, description }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-2 text-gray-500">
        {description}
      </p>

      <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-8 text-center">
        <p className="text-gray-500">
          This feature is coming soon.
        </p>
      </div>
    </div>
  );
}

export default PlaceholderPage;