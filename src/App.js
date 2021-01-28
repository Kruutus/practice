import './App.css';
import Login from './components';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <Login userName={userName} setUserName={setUserName} />
      </header>
    </div>
  );
}

export default App;
