
const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass =
  "mb-1 block text-sm font-medium text-gray-700";

function FilterPanel({ filters, onFilterChange }) {
  return (
    <aside className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-gray-900">
        Filter Jobs
      </h2>

      <div className="mt-4 space-y-4">
        <div>
          <label className={labelClass} htmlFor="search">
            Search
          </label>

          <input
            id="search"
            type="text"
            value={filters.search}
            onChange={(event) =>
              onFilterChange("search", event.target.value)
            }
            placeholder="Search job title or company"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="location">
            Location
          </label>

          <select
            id="location"
            value={filters.location}
            onChange={(event) =>
              onFilterChange("location", event.target.value)
            }
            className={inputClass}
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kochi">Kochi</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="job-type-filter">
            Job Type
          </label>

          <select
            id="job-type-filter"
            value={filters.type}
            onChange={(event) =>
              onFilterChange("type", event.target.value)
            }
            className={inputClass}
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="category">
            Category
          </label>

          <select
            id="category"
            value={filters.category}
            onChange={(event) =>
              onFilterChange("category", event.target.value)
            }
            className={inputClass}
          >
            <option value="">All Categories</option>
            <option value="Development">Development</option>
            <option value="Cloud">Cloud</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>
    </aside>
  );
}

export default FilterPanel;