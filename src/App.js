import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [isNewAddList, setIsNewAddList] = useState(false);

  return (
    <div className={styles.container}>
      <Header isAddList={setIsNewAddList} />
      <Main addNewList={isNewAddList} />
    </div>
  );
};

export default App;
