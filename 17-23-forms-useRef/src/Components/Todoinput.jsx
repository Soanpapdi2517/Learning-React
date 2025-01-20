import styles from "./Todoinput.module.css";
import { IoAdd } from "react-icons/io5";
import { useRef } from "react";

function Todoinput({ onChangeTask }) {
  const todoTask = useRef();
  const todoDate = useRef();
  const handleOnChangeValues = (event) => {
    event.preventDefault();
    onChangeTask(todoTask.current.value, todoDate.current.value);
    todoTask.current.value = "";
    todoDate.current.value = "";
  };
  return (
    <div className="todo-input">
      <form onSubmit={handleOnChangeValues} className="row myrow">
        <div className="col-6">
          <input
            className={`form-control ${styles.inputTask}`}
            ref={todoTask}
            type="text"
            placeholder="Enter Your Task"
          />
        </div>
        <div className="col-4">
          <input
            className={`form-control ${styles.inputDate}`}
            ref={todoDate}
            type="date"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success btn-primary mybtn fs-4 p-1">
            <IoAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Todoinput;
