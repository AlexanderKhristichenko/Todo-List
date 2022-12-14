import { Button } from "../UI/Button";
import styles from "./Popup.module.css";
import { useState } from "react";

export const Popup = ({ openPopup, addInData }) => {
  const closePopupHandler = () => openPopup(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isError, setIsError] = useState(false);
  const titleHandler = (e) => setEnteredTitle(e.target.value);
  const descriptionHandler = (e) => setEnteredDescription(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setIsError(true);
      setEnteredTitle("");
      setEnteredDescription("");
    } else {
      const todoListData = {
        id: new Date().toISOString(),
        title: enteredTitle,
        description: enteredDescription,
      };

      addInData(todoListData);

      setEnteredTitle("");
      setEnteredDescription("");
      openPopup(false);
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={closePopupHandler}></div>
      {isError && (
        <div className={styles.error}>
          <h2 className={styles.title}>Error:</h2>
          <p className={styles.txt}>Not all fields are filled</p>
          <Button className={styles.btn} onClick={() => setIsError(false)}>
            Close
          </Button>
        </div>
      )}
      <div className={styles.popup}>
        <form className={styles.form} onSubmit={submitHandler}>
          <label htmlFor="name" className={styles.label}>
            Title
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder="Please enter name"
            value={enteredTitle}
            onChange={titleHandler}
            disabled={isError && "disabled"}
          />
          <label htmlFor="body" className={styles.label}>
            Description
          </label>
          <textarea
            className={styles.textarea}
            id="body"
            placeholder="Please enter description"
            rows="10"
            value={enteredDescription}
            onChange={descriptionHandler}
            disabled={isError && "disabled"}
          ></textarea>
          <div className={styles.buttons}>
            <Button className={styles.btn}>Add new List</Button>
            <Button className={styles.btn} onClick={() => openPopup(false)}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
