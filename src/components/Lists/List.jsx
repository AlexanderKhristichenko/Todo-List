import styles from "./List.module.css";
import listTodos from "../../assets/images/list-todos.svg";

const List = ({ addNewList }) => {
  const lists = addNewList.map((listItem) => (
    <li key={listItem.id} className={styles.item}>
      <span>{listItem.name}</span>
      <img src={listTodos} alt={listItem.name} />
    </li>
  ));

  return <ul className={styles.list}>{lists}</ul>;
};

export default List;
