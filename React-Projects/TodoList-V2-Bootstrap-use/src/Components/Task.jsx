
function Task({ taskName, date }) {
  return (
    <div className="row myrow">
      <div className="col-6">{taskName}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger btn-primary mybtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
