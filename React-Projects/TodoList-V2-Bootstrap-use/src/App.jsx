import Header from "./Components/header";
import Todoinput from "./Components/Todoinput";

import "./Components/app.css";
import ItemContainer from "./Components/ItemContainer";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "31/12/2024",
    },
    {
      name: "CFOA practical",
      duedate: "14/01/2025",
    },
  ];
  return (
    <center className="Todo-Container">
      <Header></Header>
      <Todoinput></Todoinput>
      <ItemContainer todoTask = {todoItems}>
      </ItemContainer>
    </center>
  );
}

export default App;
