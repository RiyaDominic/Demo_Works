import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  404 - Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;