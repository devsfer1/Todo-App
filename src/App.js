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
        
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="container">
        <Home />
        <button onClick={handleClick}>Click Me</button>
      </div>
    </ReactCardFlip>
  );
}

export default App;
