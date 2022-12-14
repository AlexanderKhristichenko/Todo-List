import styles from "./List.module.css";
import { Button } from "../UI/Button";
import { useState } from "react";
import trash from "./../../assets/img/trash.svg";

export const List = ({ items, deleteItems }) => {
  const [active, setActive] = useState(null);

  const toogleHandler = (id) => {
    setActive((activeId) => (activeId === id ? null : id));
  };

  const listItems = items.map((item) => (
    <li
      className={styles.item}
      key={item.id}
      onClick={() => toogleHandler(item.id)}
    >
      <div
        className={`${styles.container} ${active === item.id && styles.active}`}
      >
        <h2 className={styles.title}>{item.title}</h2>
        <Button className={styles.btn} onClick={() => deleteItems(item.id)}>
          <img className={styles.img} src={trash} alt="Delete List" />
        </Button>
      </div>
      {active === item.id && (
        <p className={styles.description}>{item.description}</p>
      )}
    </li>
  ));

  return <ul>{listItems}</ul>;
};
