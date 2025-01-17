import styles from "./Display.module.css";

const Display = ({ displayOnChangeValue}) => {
  return (
    <div className={styles.Display}>
      <input
        value={displayOnChangeValue}
        type="text"
        readOnly
      />
    </div>
  );
};
export default Display;
