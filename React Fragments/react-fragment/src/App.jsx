import React from "react";
function App() {
  return (
    <>
      {/* or */}

      <h1>Heathy Food</h1>
      {/* //Here we can see we have to add one div to not get error */}
      {/* //but we are required to not use this div to make our items see collectively */}
      {/* // for this we use react fragments or <></> */}
      <ul class="list-group">
        <li class="list-group-item">Rajma Chawal</li>
        <li class="list-group-item">Aalo parathe</li>
        <li class="list-group-item">Chilli Potato</li>
        <li class="list-group-item">Pizza</li>
        <li class="list-group-item">Burger</li>
      </ul>
    </>
  );
}

export default App;
