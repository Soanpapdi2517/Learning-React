function Task2() {
  let taskName = "Maths CCSU Exam";
  let date = "31/12/2024";
  return (
    <div class="row myrow">
      <div class="col-6">{taskName}</div>
      <div class="col-4">{date}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger btn-primary mybtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task2;
