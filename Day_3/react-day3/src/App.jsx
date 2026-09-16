import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UIComponentsDemo from "./pages/UIComponentsDemo.jsx";

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

      {/* Protected Route */}
      <Route
        path="/dashboard"
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