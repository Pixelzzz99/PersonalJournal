import "./CardButton.css";

function CardButton({ children, className, ...props }) {
  const cl = className ? `card-button ${className}` : "card-button";

  return (
    <button {...props} className={cl}>
      {children}
    </button>
  );
}

export default CardButton;
