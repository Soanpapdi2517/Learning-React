import { useContext } from "react";
import Task from "./Task";
import { TodoItemsContext } from "../Store/todoItems-context";

const ItemContainer = () => {
  const {todoItems, de} = useContext(TodoItemsContext);

  return (
    <div className="Todo-tasks">
      {todoItems.map((items) => (
        <Task
          key={items}
          taskName={items.name}
          date={items.duedate}
        ></Task>
      ))}
    </div>
  );
};

export default ItemContainer;
