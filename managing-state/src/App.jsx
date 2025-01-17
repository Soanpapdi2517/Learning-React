import FoodItems from "./Component/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Component/ErrorMessage";
import "./App.css";
import Container from "./Component/container";
import FoodInput from "./Component/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setfoodItems] = useState([]);
  // let textToShowBelowInput = useState("Food Items should be entered here!");
  // let textToShow  = textToShowBelowInput[0];
  // let settextToshow  = textToShowBelowInput[1];
  // let [textToShow, settextToshow] = useState("Food Items should be entered here!"); // destructuring useState in single line make it 
  const onKeyDownChange = (event) => {
    if(event.key === 'Enter'){
      let newItems = event.target.value;
      event.target.value = '';
      let combinedItems = [...foodItems, newItems];
      setfoodItems(combinedItems);
    }
    // console.log(event);
    // settextToshow(event.target.value); // function to assign which help in doing task
  }
  return (
    <><Container>
    <h1 className="food-heading">Healthy food</h1>
    <FoodInput handleOnkeydownChange={onKeyDownChange}></FoodInput>
    <ErrorMessage fi={foodItems}></ErrorMessage>
    {/* <p className="textshow">{textToShow}</p> */}
    <FoodItems fi={foodItems}></FoodItems>
  </Container>
  </>
    
  );
}
export default App;
