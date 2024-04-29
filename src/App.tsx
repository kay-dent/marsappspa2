import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" className="App-logo" alt="logo" />
        <div>
          <h1>NASA</h1>
          <p>Nasa is a space agency in the US.</p>
          <p>Nasa's satellites provide data about Earth.</p>
        </div>
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
