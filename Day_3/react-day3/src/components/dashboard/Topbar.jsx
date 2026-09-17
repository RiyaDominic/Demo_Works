import { useAuth } from "../../context/AuthContext.jsx";

function Topbar({ role = "candidate" }) {
  const { logout } = useAuth();

  const roleTitle = role === "employer" ? "Employer" : "Candidate";

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          {roleTitle} Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back! Here's your overview.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-gray-900">
            Demo User
          </p>

          <p className="text-xs text-gray-500">
            {roleTitle}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
          DU
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;