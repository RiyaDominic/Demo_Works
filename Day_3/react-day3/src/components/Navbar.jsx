function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      backgroundColor: "#2563eb",
      color: "white"
    }}>
      <h2>JobPortal</h2>

      <div>
        <a href="#" style={{ color: "white", marginRight: "20px" }}>Home</a>
        <a href="#" style={{ color: "white", marginRight: "20px" }}>Jobs</a>
        <a href="#" style={{ color: "white" }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;