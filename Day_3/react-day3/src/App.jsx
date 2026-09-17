import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UIComponentsDemo from "./pages/UIComponentsDemo.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";
import CandidateDashboard from "./pages/CandidateDashboard.jsx";
import EmployerJobs from "./pages/EmployerJobs.jsx";
import CandidateJobs from "./pages/CandidateJobs.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

import DashboardLayout from "./components/dashboard/DashboardLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Home />} />

      {/* Authentication Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Default Dashboard Redirect */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Navigate to="/dashboard/candidate" replace />
          </ProtectedRoute>
        }
      />

      {/* Employer Dashboard */}
      <Route
        path="/dashboard/employer"
        element={
          <ProtectedRoute>
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employer Job Management */}
      <Route
        path="/dashboard/employer/jobs"
        element={
          <ProtectedRoute>
            <EmployerJobs />
          </ProtectedRoute>
        }
      />

      {/* Employer Placeholder Routes */}
      <Route
        path="/dashboard/employer/applicants"
        element={
          <ProtectedRoute>
            <DashboardLayout role="employer">
              <PlaceholderPage
                title="Applicants"
                description="Review and manage job applicants."
              />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/employer/interviews"
        element={
          <ProtectedRoute>
            <DashboardLayout role="employer">
              <PlaceholderPage
                title="Interviews"
                description="Manage scheduled interviews."
              />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Candidate Dashboard */}
      <Route
        path="/dashboard/candidate"
        element={
          <ProtectedRoute>
            <CandidateDashboard />
          </ProtectedRoute>
        }
      />

      {/* Candidate Job Listing */}
      <Route
        path="/dashboard/candidate/jobs"
        element={
          <ProtectedRoute>
            <CandidateJobs />
          </ProtectedRoute>
        }
      />

      {/* Candidate Placeholder Routes */}
      <Route
        path="/dashboard/candidate/applications"
        element={
          <ProtectedRoute>
            <DashboardLayout role="candidate">
              <PlaceholderPage
                title="Applications"
                description="Track your job applications."
              />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/candidate/saved"
        element={
          <ProtectedRoute>
            <DashboardLayout role="candidate">
              <PlaceholderPage
                title="Saved Jobs"
                description="View your saved job opportunities."
              />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Old Dashboard Route */}
      <Route
        path="/old-dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* UI Components Demo */}
      <Route path="/ui-demo" element={<UIComponentsDemo />} />

      {/* 404 Route */}
      <Route
        path="*"
        element={
          <div className="flex min-h-[60vh] items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800">
              404 - Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;