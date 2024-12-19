function Todoinput() {
  return (
    <div class="todo-input">
      <div class="row myrow">
        <div class="col-6">
          <input
            class="form-control w-50 inputTask"
            type="text"
            placeholder="Enter Your Task"
          />
        </div>
        <div class="col-4">
          <input class="form-control w-75 inputDate" type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success btn-primary mybtn" >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoinput;
