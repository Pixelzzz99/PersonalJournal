import { useState } from "react";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";
import LeftPanel from "./components/layouts/LeftPanel/LeftPanel.jsx";
import Body from "./components/layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import "./App.css";
import JournalForm from "./components/JournalForm/JournalForm.jsx";

const INITIAL_DATA = [];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  let list = <p>Записей пока нет, добавьте первую</p>;
  if (items.length > 0) {
    list =
      items.length > 0 &&
      items.sort(sortItems).map((item) => (
        <CardButton key={item.id}>
          <JournalItem title={item.title} text={item.text} date={item.date} />
        </CardButton>
      ));
  }

  return (
    <div className="App">
      <LeftPanel>
        <Header />
        <JournalAddButton>Новое воспоминание</JournalAddButton>
        <JournalList>{list}</JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
