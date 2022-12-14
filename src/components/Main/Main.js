import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.promo}></div>
      <h2 className={styles.title}>to-do list</h2>
    </main>
  );
};
