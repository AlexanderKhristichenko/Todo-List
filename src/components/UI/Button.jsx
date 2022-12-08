import styles from "./Button.module.css";

const Button = ({ children, onCLick }) => {
  return (
    <button className={styles.btn} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
