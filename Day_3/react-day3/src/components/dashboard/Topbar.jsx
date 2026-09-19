
import { useAuth } from "../../context/AuthContext.jsx";

function Topbar({ role = "candidate" }) {
  const { logout, user } = useAuth();

  const roleTitle = role === "employer" ? "Employer" : "Candidate";

  const userEmail = user?.email || "User";

  const userInitial = userEmail.charAt(0).toUpperCase();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b bg-white px-4 py-4 shadow-sm sm:px-6">
      <div className="min-w-0">
        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
          {roleTitle} Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back! Here's your overview.
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden text-right sm:block">
          <p className="max-w-[220px] truncate text-sm font-semibold text-gray-900">
            {userEmail}
          </p>

          <p className="text-xs text-gray-500">
            {roleTitle}
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 sm:h-10 sm:w-10">
          {userInitial}
        </div>

        <button
          type="button"
          onClick={logout}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;