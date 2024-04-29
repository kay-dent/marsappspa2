import React from 'react';
import landingBody from './landingBody';
import './App.css';
import LandingBody from './landingBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingBody />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}  
  
export default App;
