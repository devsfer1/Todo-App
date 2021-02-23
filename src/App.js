import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Home from './components/Home';
import Button from './components/Button';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="container">
        <Home />
        <Button onHandleClick={handleClick}>Click me</Button>
      </div>
      <div className="container">

        <Button onHandleClick={handleClick}>Click Me</Button>
      </div>
    </ReactCardFlip>
  );
}

export default App;
