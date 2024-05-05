import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

function JournalAddButton({ children }) {
  return (
    <CardButton className="journal-add">
      <img className="plus" src="/plus.svg" alt="plus" />
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
