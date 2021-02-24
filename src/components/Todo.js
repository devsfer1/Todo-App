import { AiFillCloseCircle } from 'react-icons/ai';

const Todo = ({ todo, onDelete }) => {
  return (
      <div className="todo-item">
        <h3 className="todo">{todo.text}<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'} } onClick={() => onDelete(todo.id)} /></h3>
      </div>
  )
};

export default Todo
