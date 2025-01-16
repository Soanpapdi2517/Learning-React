import Items from "./Items";
const FoodItems = ({ fi }) => {
  return (
    <ul className="list-group">
      {fi.map((items) => (
        <Items
          key={items}
          item={items}
          handleBuyButton={() => console.log(`${items} is clicked`)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
