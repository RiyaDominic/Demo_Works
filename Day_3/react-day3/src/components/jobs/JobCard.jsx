function JobCard({ job }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {job.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {job.company}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {job.type}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
        <span className="rounded-md bg-gray-100 px-3 py-1">
          📍 {job.location}
        </span>

        <span className="rounded-md bg-gray-100 px-3 py-1">
          💼 {job.category}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        {job.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <p className="font-semibold text-green-600">
          {job.salary}
        </p>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default JobCard;