import Header from "./Components/header";
import Todoinput from "./Components/Todoinput";
import "./Components/app.css";
import ItemContainer from "./Components/ItemContainer";
import NoTask from "./Components/NoTask";
import TodoItemsContextProvider from "./Store/todoItems-context";
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="Todo-Container">
        <Header></Header>
        <Todoinput></Todoinput>
        <NoTask></NoTask>
        <ItemContainer></ItemContainer>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
