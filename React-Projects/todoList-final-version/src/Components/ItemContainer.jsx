import Task from "./Task";

const ItemContainer = ({ todoTask, onDeleteBtn}) => {
  return (
    <div className="Todo-tasks">
      {todoTask.map((items) => (
        <Task onDeleteBtn={onDeleteBtn} taskName={items.name} date={items.duedate}></Task>
      ))}
    </div>
  );
};

export default ItemContainer;
