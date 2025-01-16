import FoodItems from "./Component/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Component/ErrorMessage";
import "./App.css";
import Container from "./Component/container";
import FoodInput from "./Component/FoodInput";
function App() {
  let foodItems = ["Rajma chawal", "Maggi", "burger", "pizza", "chicken"];
  // let foodItems = [];
  const handleOnChangeTyping = (event) => {
    console.log(event.target.value);
  }
  return (
    <><Container>
    <h1 className="food-heading">Healthy food</h1>
    <ErrorMessage fi={foodItems}></ErrorMessage>
    <FoodInput handleOnChange={handleOnChangeTyping}></FoodInput>
    <FoodItems fi={foodItems}></FoodItems>
  </Container>
  </>
    
  );
}
export default App;
