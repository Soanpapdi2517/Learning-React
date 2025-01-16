import styles from "./Item.module.css";

const Items = ({ item , handleBuyButton}) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{item}</span>
      <button
        className={`${styles.Button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy Me
      </button>
    </li>
  );
};

export default Items;
