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
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JobPortal</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#jobs">Jobs</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;