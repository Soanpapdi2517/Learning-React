import Header from "./Components/header";
import Todoinput from "./Components/Todoinput";
import "./Components/app.css";
import ItemContainer from "./Components/ItemContainer";
import NoTask from "./Components/NoTask";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleGivenTask = (itemName, itemDueDate) => {
    const newTaskDate = { name: itemName, duedate: itemDueDate };
    const combinedDate = [...todoItems, newTaskDate];
    setTodoItems(combinedDate);
  };
  const handleOnDeletebtn = (TaskName) => {
    const newTasksAfterDelete = todoItems.filter(
      (tasks) => tasks.name !== TaskName
    );
    setTodoItems(newTasksAfterDelete);
  };
  return (
    <center className="Todo-Container">
      <Header></Header>
      <Todoinput onChangeTask={handleGivenTask}></Todoinput>
      {todoItems.length === 0 && <NoTask></NoTask>}
      <ItemContainer
        onDeleteBtn={handleOnDeletebtn}
        todoTask={todoItems}
      ></ItemContainer>
    </center>
  );
}

export default App;
