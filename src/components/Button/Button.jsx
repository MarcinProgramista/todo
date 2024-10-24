/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

export function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
