import styles from "./Display.module.css";

const Display = () => {
  return (
    <div className={styles.display}>
      <input type="text" readOnly />
    </div>
  );
};
export default Display;
