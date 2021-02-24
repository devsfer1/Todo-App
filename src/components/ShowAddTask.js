
function ShowAddTask() {
  return (
    <form className="add-form">
      <div className="form-item">
        <label className="form-title">Enter your Todo below</label>
        <input type="text" placeholder="Type your todo..." className="form-input"></input>
      </div>
      <input type="submit" value="Add Todo" className="form-btn"></input>
    </form>
  )
}

export default ShowAddTask
