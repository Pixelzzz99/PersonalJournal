import "./JournalList.css";

function JournalList({ children }) {
  const clicked = () => {
    alert("Hello");
  };
  return <div className="journal-list">{children}</div>;
}

export default JournalList;
