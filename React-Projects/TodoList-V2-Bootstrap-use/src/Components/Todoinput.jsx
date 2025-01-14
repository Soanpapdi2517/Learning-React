function Todoinput() {
  return (
    <div className="todo-input">
      <div className="row myrow">
        <div className="col-6">
          <input
            className="form-control w-50 inputTask"
            type="text"
            placeholder="Enter Your Task"
          />
        </div>
        <div className="col-4">
          <input className="form-control w-75 inputDate" type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success btn-primary mybtn" >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoinput;
