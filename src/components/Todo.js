import { AiFillCloseCircle } from 'react-icons/ai';

const Todo = () => {
  return (
    <>
      <div className="todo-item">
        <h3 className="todo">Lavar a roupa<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
      <div className="todo-item">
        <h3 className="todo">Dormir<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
      <div className="todo-item">
        <h3 className="todo">Programar<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
      <div className="todo-item">
        <h3 className="todo">Task 1<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
      <div className="todo-item">
        <h3 className="todo">Task 1<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
      <div className="todo-item">
        <h3 className="todo">Task 1<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
      <div className="todo-item">
        <h3 className="todo">Task 1<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
    </>
  )
}

export default Todo
