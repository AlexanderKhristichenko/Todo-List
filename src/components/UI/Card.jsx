import styles from "./Card.module.css";

const Card = ({ children, txt, className }) => {
  return (
    <>
      <div className={`${styles.card} ${className}`}>
        <div className={styles.promo}></div>
        {children}
      </div>
      {txt && <p className={styles.txt}>{txt}</p>}
    </>
  );
};

export default Card;
