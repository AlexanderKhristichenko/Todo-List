import styles from "./Header.module.css";
import plusCircle from "../../assets/images/PlusCircle.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>TO DO | YOUR LISTS</h2>
      <div className={styles.list}>
        <img src={plusCircle} alt="Plus Circle" />
        <p>Add new List</p>
      </div>
    </header>
  );
};

export default Header;
