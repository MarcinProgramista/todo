/* eslint-disable react/prop-types */
import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";
export function ToDoItem({ name, done, onDeleteButtonClik, onDoneButtonClik }) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClik}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClik}>Usuń</Button>
    </li>
  );
}
