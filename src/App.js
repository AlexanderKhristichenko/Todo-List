import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import List from "./components/Lists/List";
import Main from "./components/Main/Main";

const DUMMY_DATA = [];

const App = () => {
  const [isNewAddList, setIsNewAddList] = useState(false);
  const [listsName, setListsName] = useState(DUMMY_DATA);

  const addNameListsHandler = (nameLists) =>
    setListsName((prevListDataName) => [nameLists, ...prevListDataName]);

  return (
    <div className={styles.container}>
      <Header
        isAddList={setIsNewAddList}
        isForm={isNewAddList}
        dataList={addNameListsHandler}
      />
      {listsName.length === 0 ? (
        <Main isRes={isNewAddList} />
      ) : (
        <List addNewList={listsName} />
      )}
    </div>
  );
};

export default App;
