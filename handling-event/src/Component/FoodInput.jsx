import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
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
