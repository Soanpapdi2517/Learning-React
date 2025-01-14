import Task from "./Task";

const ItemContainer = ({ todoTask }) => {
  return (
    <div className="Todo-tasks">
      {todoTask.map((items) => (
        <Task taskName={items.name} date={items.duedate}></Task>
      ))}
    </div>
  );
};

export default ItemContainer;
