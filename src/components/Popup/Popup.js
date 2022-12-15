import { Button } from "../UI/Button";
import styles from "./Popup.module.css";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

const Form = ({ openPopup, addInData }) => {
  const closePopupHandler = () => openPopup(false);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [isError, setIsError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setIsError(true);
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    } else {
      const todoListData = {
        id: new Date().toISOString(),
        title: enteredTitle,
        description: enteredDescription,
      };

      addInData(todoListData);

      titleRef.current.value = "";
      descriptionRef.current.value = "";
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
            ref={titleRef}
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
            ref={descriptionRef}
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

export const Popup = ({ openPopup, addInData }) => {
  return (
    <>
      {createPortal(
        <Form openPopup={openPopup} addInData={addInData} />,
        document.getElementById("modal")
      )}
    </>
  );
};
