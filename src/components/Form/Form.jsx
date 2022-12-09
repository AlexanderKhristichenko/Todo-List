import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ placeholder, newNameList }) => {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (e) => setEnteredName(e.target.value);

  const nameHandler = (e) => {
    e.preventDefault();

    const nameList = {
      id: new Date().toISOString(),
      name: enteredName,
    };
    newNameList(nameList);
    setEnteredName("");
  };

  return (
    <form onSubmit={nameHandler} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={nameChangeHandler}
        value={enteredName}
      />
    </form>
  );
};

export default Form;
