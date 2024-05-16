import "./Button.css";
import { memo } from "react";

function Button({ text, onClick }) {
  return (
    <button className="button accent" onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(Button);
