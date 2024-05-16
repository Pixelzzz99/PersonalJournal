import { useState } from "react";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import "./App.css";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import { useLocalStorage } from "./hooks/use-localstorage.hook.js";
import { UserContextProvider } from "./context/user.context.jsx";

const INITIAL_DATA = [];

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map((i) => ({
    ...i,
    date: new Date(i.date),
  }));
}

function App() {
  const [items, setItems] = useLocalStorage("items");
  const [selectedItem, setSelectedItem] = useState({});

  const addItem = (item) => {
    if (!item.id) {
      setItems([
        ...mapItems(items),
        {
          ...item,
          date: new Date(item.date),
          id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      setItems([
        ...mapItems(items).map((i) => {
          if (i.id === item.id) {
            return { ...item };
          }
          return i;
        }),
      ]);
    }
  };

  return (
    <UserContextProvider>
      <div className="App">
        <LeftPanel>
          <Header />
          <JournalAddButton>Новое воспоминание</JournalAddButton>
          <JournalList items={mapItems(items)} setItem={setSelectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} data={selectedItem} />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
