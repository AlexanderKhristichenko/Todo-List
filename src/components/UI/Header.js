import styles from "./Header.module.css";
import { Button } from "./Button";
import add from "./../../assets/img/add.svg";

export const Header = ({ openPopup }) => {
  const openPopupHandler = () => openPopup(true);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.title}>TO DO | YOUR LISTS</h2>
        <Button className={styles.btn} onClick={openPopupHandler}>
          <img src={add} alt="Add new List" />
          Add new List
        </Button>
      </div>
    </header>
  );
};
