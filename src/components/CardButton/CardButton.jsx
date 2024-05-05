import "./CardButton.css";

function CardButton({ children, className }) {
  const cl = className ? `card-button ${className}` : "card-button";
  const clicked = () => {
    alert("Hello");
  };

  return (
    <button onClick={clicked} className={cl}>
      {children}
    </button>
  );
}

export default CardButton;
