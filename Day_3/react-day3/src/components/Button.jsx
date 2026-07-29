function Button({ label }) {
  return (
    <button
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}

export default Button;