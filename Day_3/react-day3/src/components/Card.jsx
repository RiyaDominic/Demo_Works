import Button from "./Button";

function Card({ title, description, image, buttonLabel }) {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "8px"
        }}
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <Button label={buttonLabel} />
    </div>
  );
}

export default Card;