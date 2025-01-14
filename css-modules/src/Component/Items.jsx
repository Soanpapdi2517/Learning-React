import styles from "./Item.module.css";

const Items = ({ item }) => {
  return (
    <li className={`${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{item}</span>
    </li>
  );
};

export default Items;
