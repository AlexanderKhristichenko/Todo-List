import styles from "./Header.module.css";
import plusCircle from "../../assets/images/PlusCircle.svg";
import Button from "../UI/Button";
import Form from "../Form/Form";

const Header = ({ isAddList, isForm, dataList }) => {
  const clickBtnHandler = () => isAddList(true);
  const list = (listsData) => {
    const nameList = {
      ...listsData,
    };
    dataList(nameList);
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>
        <a href="./index.html">TO DO | YOUR LISTS</a>
      </h2>
      {isForm && (
        <Form placeholder="Name the list and press Enter" newNameList={list} />
      )}
      <Button onCLick={clickBtnHandler}>
        <img src={plusCircle} alt="Plus Circle" />
        <p className={styles.txt}>Add new List</p>
      </Button>
    </header>
  );
};

export default Header;
