import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          JobPortal
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#jobs"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Jobs
          </a>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#jobs"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              Jobs
            </a>

            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;