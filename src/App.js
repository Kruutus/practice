import './App.css';
import Login from './components';
import Footer from "./components/Footer";
import { useState } from 'react';

const navbarComponents = [
  'Home',
  'Profile',
  'Reference',
  'Contacts',
];

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div className="App">
      <div className="navbarContainer">
        {navbarComponents.map(el => <span>{el}</span>)}
      </div>
      <div className="App-header">
        Bejelentkezés
        <Login userName={userName} setUserName={setUserName} password={password} setPassword={setPassword}/>
      </div>      
        <Footer />
    </div>
  );
}

export default App;
