import styles from "./Header.module.css";
import plusCircle from "../../assets/images/PlusCircle.svg";
import Button from "../UI/Button";

const Header = ({ isAddList }) => {
  const clickBtnHandler = () => isAddList(true);

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>
        <a href="./index.html">TO DO | YOUR LISTS</a>
      </h2>
      <Button onCLick={clickBtnHandler}>
        <img src={plusCircle} alt="Plus Circle" />
        <p className={styles.txt}>Add new List</p>
      </Button>
    </header>
  );
};

export default Header;
