import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Home from './components/Home';
import Button from './components/Button';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="container" >
        <Home />
        <div className="todo-container">
          <Todo />
        </div>
        <Button title="+" btnClass="btn btn-front" onHandleClick={handleClick} />
      </div>
      <div className="container">
        <AddTodo />
        <Button title="x" btnClass="btn btn-back" onHandleClick={handleClick} /> 
      </div>
    </ReactCardFlip>
  );
}

export default App;
