import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types'

const Todo = ({ todo, onDelete }) => {
  return (
      <div className="todo-item">
        <h3 className="todo">{todo.text}<AiFillCloseCircle style={{color: 'red', cursor: 'pointer'} } onClick={() => onDelete(todo.id)} /></h3>
      </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.string
}

export default Todo
