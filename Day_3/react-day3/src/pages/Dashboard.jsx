import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard
              </h1>

              <p className="mt-2 text-gray-600">
                Welcome to your job portal dashboard.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-5">
              <h2 className="font-semibold text-gray-900">
                Applications
              </h2>
              <p className="mt-2 text-2xl font-bold text-blue-600">
                0
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-5">
              <h2 className="font-semibold text-gray-900">
                Saved Jobs
              </h2>
              <p className="mt-2 text-2xl font-bold text-green-600">
                0
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-5">
              <h2 className="font-semibold text-gray-900">
                Profile
              </h2>
              <p className="mt-2 text-sm text-purple-600">
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;