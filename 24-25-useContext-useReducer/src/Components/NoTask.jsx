import { useContext } from "react";
import { TodoItemsContext } from "../Store/todoItems-context";
import styles from "./NoTask.module.css";
const NoTask = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <h3 className={styles.noTask}>No Task Available</h3>
    )
  );
};

export default NoTask;
