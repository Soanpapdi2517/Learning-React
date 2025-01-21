import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  updateTodoItems: () => {},
  deleteTodoItem: () => {},
});

const reducerTodoItems = (preTodoItems, action) => {
  let newTodoItems = preTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...preTodoItems,
      { name: action.payload.itemName, duedate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = preTodoItems.filter(
      (tasks) => tasks.name !== action.payload.TaskName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(reducerTodoItems, []); //useReducer syntax
  const updateTodoItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteTodoItem = (TaskName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        TaskName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        updateTodoItems,
        deleteTodoItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
