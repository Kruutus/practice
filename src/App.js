import './App.css';
import Login from './components';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <Login userName={userName} setUserName={setUserName} password={password} setPassword={setPassword}/>
      </header>
    </div>
  );
}

export default App;
