import Header from "./Components/header";
import Todoinput from "./Components/Todoinput";
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";
import "./Components/app.css";
function App() {
  return (
    <center class="Todo-Container">
      <Header></Header>
      <Todoinput></Todoinput>
      <div class="Todo-tasks">
        <Task1></Task1>
      </div>
        <Task2></Task2>
    </center>
  );
}

export default App;
