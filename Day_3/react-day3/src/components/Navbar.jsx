// function Navbar() {
//   return (
//     <nav style={{
//       display: "flex",
//       justifyContent: "space-between",
//       padding: "15px 30px",
//       backgroundColor: "#2563eb",
//       color: "white"
//     }}>
//       <h2>JobPortal</h2>

//       <div>
//         <a href="#" style={{ color: "white", marginRight: "20px" }}>Home</a>
//         <a href="#" style={{ color: "white", marginRight: "20px" }}>Jobs</a>
//         <a href="#" style={{ color: "white" }}>Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">JobPortal</div>

//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="#jobs">Jobs</a>
//         <a href="#about">About</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          JobPortal
        </h1>

        <div className="hidden gap-6 md:flex">
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
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;