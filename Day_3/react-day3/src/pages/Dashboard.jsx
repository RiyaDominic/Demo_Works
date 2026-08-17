import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              DASHBOARD
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Welcome to your Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your job search and explore new opportunities.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-5 py-2.5 font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Available Jobs
            </h2>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              24
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Jobs matching your interests
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Applications
            </h2>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              5
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Applications submitted
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Profile
            </h2>

            <p className="mt-2 text-3xl font-bold text-green-600">
              80%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Profile completion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;