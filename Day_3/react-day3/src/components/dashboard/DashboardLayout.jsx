
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

function DashboardLayout({ role = "candidate", children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <Topbar role={role} />

        {/* Page Content */}
        <main className="min-w-0 flex-1 p-4 sm:p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white px-4 py-4 text-center text-sm text-gray-500 sm:px-6">
          <p>
            © {new Date().getFullYear()} HireFlow. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;