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
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Job Management
          </h1>

          <p className="mt-1 text-gray-500">
            Create and manage your job postings.
          </p>
        </div>

        <JobPostForm onJobCreate={handleJobCreate} />

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Job Listings
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {jobList.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EmployerJobs;