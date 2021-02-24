import { AiFillCloseCircle } from 'react-icons/ai';

const Todo = ({ todo }) => {
  return (
    <>
      <div className="todo-item">
        <h3 className="todo">{todo.text}<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'}} /></h3>
      </div>
    </>
  )
}

export default Todo
