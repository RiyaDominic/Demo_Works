
import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout.jsx";
import JobPostForm from "../components/jobs/JobPostForm.jsx";
import JobCard from "../components/jobs/JobCard.jsx";
import { jobs as initialJobs } from "../data/jobData.js";

function EmployerJobs() {
  const [jobList, setJobList] = useState(initialJobs);

  const handleJobCreate = (newJob) => {
    setJobList((previousJobs) => [newJob, ...previousJobs]);
  };

  return (
    <DashboardLayout role="employer">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Job Management
          </h1>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Create and manage your job postings.
          </p>
        </div>

        {/* Job Creation Form */}
        <JobPostForm onJobCreate={handleJobCreate} />

        {/* Job Listings */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Job Listings
          </h2>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {jobList.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default EmployerJobs;