import { useState } from "react";
import styles from "./Todoinput.module.css";
import { IoAdd } from "react-icons/io5";
function Todoinput({ onChangeTask }) {
  const [addTodoTask, setAddTodoTask] = useState("");
  const [addTodoDate, setAddTodoDate] = useState("");
  const handleOnTask = (event) => {
    setAddTodoTask(event.target.value);
  };
  const handleOnDate = (event) => {
    setAddTodoDate(event.target.value);
  };
  const handleOnChangeValues = (event) => {
    event.preventDefault();
    onChangeTask(addTodoTask, addTodoDate);
    setAddTodoTask("");
    setAddTodoDate("");
  };
  return (
    <div className="todo-input">
      <form onSubmit={handleOnChangeValues} className="row myrow">
        <div className="col-6">
          <input
            className={`form-control ${styles.inputTask}`}
            type="text"
            value={addTodoTask}
            placeholder="Enter Your Task"
            onChange={handleOnTask}
          />
        </div>
        <div className="col-4">
          <input
            className={`form-control ${styles.inputDate}`}
            type="date"
            value={addTodoDate}
            onChange={handleOnDate}
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
