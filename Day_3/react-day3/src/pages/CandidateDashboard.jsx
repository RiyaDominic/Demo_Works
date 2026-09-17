import DashboardLayout from "../components/dashboard/DashboardLayout.jsx";
import OverviewCard from "../components/dashboard/OverviewCard.jsx";
import { candidateStats } from "../data/dashboardData.js";

function CandidateDashboard() {
  return (
    <DashboardLayout role="candidate">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Candidate Overview
          </h1>

          <p className="mt-1 text-gray-500">
            Track your job applications and saved jobs.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {candidateStats.map((stat) => (
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
            Recent Applications
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Your recent job applications will appear here.
          </p>

          <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">
              No recent applications available.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CandidateDashboard;