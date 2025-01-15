import FoodItems from "./Component/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Component/ErrorMessage";
import "./App.css";
import Container from "./Component/container";
function App() {
  let foodItems = ["Rajma chawal", "Maggi", "burger", "pizza", "chicken"];
  // let foodItems = [];
  return (
    <><Container>
    <h1 className="food-heading">Healthy food</h1>
    <ErrorMessage fi={foodItems}></ErrorMessage>
    <FoodItems fi={foodItems}></FoodItems>
  </Container>
  <Container>
    <p>Above list gives a breif about how to use passing children Customized & reuseable container</p>
  </Container>
  </>
    
  );
}
export default App;
