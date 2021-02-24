
function ShowAddTask() {
  return (
    <form className="add-form">
      <div className="form-item">
        <label className="form-title">Enter your Todo below</label>
        <input type="text" placeholder="Add Taskname"></input>
      </div>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default ShowAddTask
