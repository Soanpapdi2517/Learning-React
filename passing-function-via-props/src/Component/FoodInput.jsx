import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search your Food"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
