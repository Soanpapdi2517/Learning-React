import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../Store/todoItems-context";
import { useContext } from "react";
function Task({ taskName, date}) {
  const contextObj = useContext(TodoItemsContext);
  const onDeleteBtn = contextObj.deleteTodoItem;
  return (
    <div className="row myrow">
      <div className="col-6">{taskName}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button type="button" onClick={() => onDeleteBtn(taskName)} className="btn btn-danger btn-primary mybtn">
        <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default Task;
