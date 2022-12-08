import Card from "../UI/Card";
import styles from "./Main.module.css";
import addList from "../../assets/images/Illustrations-reading-side.svg";

const Main = ({ addNewList }) => {
  return (
    <main className={styles.main}>
      {!addNewList && (
        <Card className={styles.active}>
          <h1 className={styles.title}>to-do list</h1>
        </Card>
      )}
      {addNewList && (
        <Card className={styles.active}>
          <img className={styles.img} src={addList} alt="Add List" />
        </Card>
      )}
    </main>
  );
};

export default Main;
