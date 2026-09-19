
import DashboardLayout from "../components/dashboard/DashboardLayout.jsx";
import OverviewCard from "../components/dashboard/OverviewCard.jsx";
import { candidateStats } from "../data/dashboardData.js";

function CandidateDashboard() {
  return (
    <DashboardLayout role="candidate">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Candidate Overview
          </h1>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Track your job applications and saved jobs.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
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

        {/* Recent Applications */}
        <section className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Applications
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Your recent job applications will appear here.
          </p>

          <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-6 text-center sm:p-8">
            <p className="text-sm text-gray-500">
              No recent applications available.
            </p>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default CandidateDashboard;