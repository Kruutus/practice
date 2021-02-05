import './App.css';
import Login from './components';
import Footer from "./components/Footer";
import { useState } from 'react';
import StickyHeader from 'react-sticky-header';



const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div className="App">
      <div>
      <StickyHeader
    header={
      <div>
        <h1>ReactStickyHeader</h1>
        <ul>
          <li>When</li>
          <li>Why</li>
          <li >About</li>
        </ul>
      </div>
    }
  >
    <section>
      <p>
        This section will be what the sticky header scrolls over before entering into
        sticky state. See the gif above or run the test story book to see examples.
      </p>
    </section>
  </StickyHeader>
      </div>
      <div className="App-header">
        Bejelentkezés
        <Login userName={userName} setUserName={setUserName} password={password} setPassword={setPassword}/>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
