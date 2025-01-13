function App() {
  let foodItems = ["Rajma chawal", "Maggi", "burger", "pizza", "chicken"];
  return (
    <>
      <h1 className="text-center">Healthy food</h1>
      <ul className="list-group text-center">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">{items}</li>
        ))};
        
      </ul>
    </>
  )
}

export default App;
