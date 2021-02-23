import { useState } from 'react'
import Home from './components/Home'
import Button from './components/Button'

function App() {
  const [showAddTodo, setShowAddTodo] = useState(true);
  return (
    <div className="container">
      <Home />
      <Button />
    </div>
  );
}

export default App;
