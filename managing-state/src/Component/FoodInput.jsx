import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnkeydownChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search your Food"
      onKeyDown={handleOnkeydownChange}
    />
  );
};

export default FoodInput;
