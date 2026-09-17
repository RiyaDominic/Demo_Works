import DashboardLayout from "../components/dashboard/DashboardLayout.jsx";
import OverviewCard from "../components/dashboard/OverviewCard.jsx";
import { employerStats } from "../data/dashboardData.js";

function EmployerDashboard() {
  return (
    <DashboardLayout role="employer">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Employer Overview
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your jobs and track applicants.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {employerStats.map((stat) => (
            <OverviewCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>

        {/* Placeholder Data View */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Job Postings
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Your recent job postings will appear here.
          </p>

          <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">
              No recent job postings available.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EmployerDashboard;