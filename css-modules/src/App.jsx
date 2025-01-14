import FoodItems from "./Component/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Component/ErrorMessage";
import "./App.css";
function App() {
  let foodItems = ["Rajma chawal", "Maggi", "burger", "pizza", "chicken"];
  // let foodItems = [];
  return (
    <>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMessage fi={foodItems}></ErrorMessage>
      <FoodItems fi={foodItems}></FoodItems>
    </>
  );
}
export default App;
