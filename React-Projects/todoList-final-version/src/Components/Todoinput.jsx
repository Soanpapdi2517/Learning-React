import { useState } from "react";
import styles from "./Todoinput.module.css";
function Todoinput({ onChangeTask }) {
  const [addTodoTask, setAddTodoTask] = useState();
  const [addTodoDate, setAddTodoDate] = useState();
  const handleOnTask = (event) => {
    setAddTodoTask(event.target.value);
  };
  const handleOnDate = (event) => {
    setAddTodoDate(event.target.value);
  };
  const handleOnChangeValues = () => {
    onChangeTask(addTodoTask, addTodoDate);
    setAddTodoTask("");
    setAddTodoDate("");
  }
  return (
    <div className="todo-input">
      <div className="row myrow">
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
          <button
            type="button"
            className="btn btn-success btn-primary mybtn"
            onClick={handleOnChangeValues}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoinput;
