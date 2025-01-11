function App() {
  //   let foodItems = ["Rajma chawal", "Maggi", "burger", "pizza", "chicken"];
  let foodItems = [];
  let empty = foodItems.length === 0 && (
    <h3 className="text-center">I'm Still Hungry Bring me some Food</h3>
  );
  return (
    <>
      <h1 className="text-center">Healthy food</h1>
      {empty};
      <ul className="list-group text-center">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
