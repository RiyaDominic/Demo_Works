import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Demo registration for Day 13
    localStorage.setItem("isAuthenticated", "true");

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md sm:p-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Create an Account
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Register to explore job opportunities.
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;