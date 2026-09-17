import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout.jsx";
import JobCard from "../components/jobs/JobCard.jsx";
import FilterPanel from "../components/jobs/FilterPanel.jsx";
import { jobs } from "../data/jobData.js";

const initialFilters = {
  search: "",
  location: "",
  type: "",
  category: "",
};

function CandidateJobs() {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (name, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));
  };

  const filteredJobs = jobs.filter((job) => {
    const searchTerm = filters.search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm);

    const matchesLocation =
      !filters.location || job.location === filters.location;

    const matchesType =
      !filters.type || job.type === filters.type;

    const matchesCategory =
      !filters.category || job.category === filters.category;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesCategory
    );
  });

  return (
    <DashboardLayout role="candidate">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Browse Jobs
          </h1>

          <p className="mt-1 text-gray-500">
            Find job opportunities that match your skills.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <FilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Available Jobs
              </h2>

              <span className="text-sm text-gray-500">
                {filteredJobs.length} jobs found
              </span>
            </div>

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                <p className="text-gray-500">
                  No jobs match your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CandidateJobs;