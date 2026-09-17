function FilterPanel({ filters, onFilterChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        Filter Jobs
      </h2>

      <div className="mt-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Search
          </label>

          <input
            type="text"
            value={filters.search}
            onChange={(event) =>
              onFilterChange("search", event.target.value)
            }
            placeholder="Search job title or company"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Location
          </label>

          <select
            value={filters.location}
            onChange={(event) =>
              onFilterChange("location", event.target.value)
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kochi">Kochi</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Job Type
          </label>

          <select
            value={filters.type}
            onChange={(event) =>
              onFilterChange("type", event.target.value)
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            value={filters.category}
            onChange={(event) =>
              onFilterChange("category", event.target.value)
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">All Categories</option>
            <option value="Development">Development</option>
            <option value="Cloud">Cloud</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;