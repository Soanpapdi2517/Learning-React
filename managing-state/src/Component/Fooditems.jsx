import { useState } from "react";
import Items from "./Items";
const FoodItems = ({ fi }) => {
  let [boughtFoodItems, setBoughtFoodItems] = useState([]);
  const buyButtonClicked = (event, items) => {
    let newFoodItems =  [...boughtFoodItems, items];
    setBoughtFoodItems(newFoodItems);
    console.log(event);
  }
  return (
    <ul className="list-group">
      {fi.map((items) => (
        <Items
          key={items}
          item={items}
          bought={boughtFoodItems.includes(items)}
          handleBuyButton={(event) => buyButtonClicked(event, items)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
