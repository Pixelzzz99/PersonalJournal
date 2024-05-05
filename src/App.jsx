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

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      date: new Date(),
    },
    {
      title: "Подготовка к обновлению курсов",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      date: new Date(),
    },
    {
      title: "Подготовка к обновлению курсов",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      date: new Date(),
    },
  ];

  return (
    <div className="App">
      <LeftPanel>
        <Header />
        <JournalAddButton>Новое воспоминание</JournalAddButton>
        <JournalList>
          {data.map((item, index) => (
            <CardButton key={index}>
              <JournalItem
                title={item.title}
                text={item.text}
                date={item.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
