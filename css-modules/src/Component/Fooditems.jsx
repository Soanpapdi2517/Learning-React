import Items from "./Items";
const FoodItems = ({fi}) => {
  return (
    <ul className="list-group text-center">
      {fi.map((items) => (
        <Items key={items} item={items}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
