import { NavLink } from "react-router-dom";

function Sidebar({ role = "candidate" }) {
  const employerMenuItems = [
    { label: "Overview", path: "/dashboard/employer" },
    { label: "Post Jobs", path: "/dashboard/employer/jobs" },
    { label: "Applicants", path: "/dashboard/employer/applicants" },
    { label: "Interviews", path: "/dashboard/employer/interviews" },
  ];

  const candidateMenuItems = [
    { label: "Overview", path: "/dashboard/candidate" },
    { label: "Browse Jobs", path: "/dashboard/candidate/jobs" },
    { label: "Applications", path: "/dashboard/candidate/applications" },
    { label: "Saved Jobs", path: "/dashboard/candidate/saved" },
  ];

  const menuItems =
    role === "employer" ? employerMenuItems : candidateMenuItems;

  const roleTitle = role === "employer" ? "Employer" : "Candidate";

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-gray-900 text-white">
      <div className="border-b border-gray-700 px-6 py-5">
        <h1 className="text-xl font-bold">HireFlow</h1>
        <p className="mt-1 text-sm text-gray-400">
          {roleTitle} Portal
        </p>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.label === "Overview"}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-700 px-6 py-4">
        <p className="text-xs text-gray-400">
          Dashboard v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;