import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Home from './components/Home';
import Button from './components/Button';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([{}])
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Add todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTodo = { id, ...todo}
    setTodos([...todos, newTodo])
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="container" >
        <Home />
        <div className="todo-container">
          {todos.length > 1 ? <Todos todos={todos} /> : 'No Todos Added Yet.'}
        </div>
        <Button title="+" btnClass="btn btn-front" onHandleClick={handleClick} />
      </div>
      <div className="container">
        <AddTodo onAdd={addTodo} />
        <Button title="x" btnClass="btn btn-back" onHandleClick={handleClick} /> 
      </div>
    </ReactCardFlip>
  );
}

export default App;
