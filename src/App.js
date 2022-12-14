import { useState } from "react";
import styles from "./App.module.css";
import { List } from "./components/List/List";
import { Main } from "./components/Main/Main";
import { Popup } from "./components/Popup/Popup";
import { Header } from "./components/UI/Header";

const DUMMY_DATA = [];

const App = () => {
  const [isOpenedPopup, setIsOpenedPopup] = useState(false);
  const [data, setData] = useState(DUMMY_DATA);
  const openPopupHandler = (isOpen) => {
    setIsOpenedPopup(isOpen);
    !isOpenedPopup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  const newTodoList = (newList) => {
    setData((prev) => [newList, ...prev]);
  };

  const deleteItem = (item) => {
    setData(data.filter((del) => del.id !== item));
  };

  return (
    <div className={styles.wrap}>
      {isOpenedPopup && (
        <Popup openPopup={openPopupHandler} addInData={newTodoList} />
      )}
      <Header openPopup={openPopupHandler} />
      {data.length !== 0 ? (
        <List items={data} deleteItems={deleteItem} />
      ) : (
        <Main />
      )}
    </div>
  );
};

export default App;
