import React from 'react';
import landingBody from './ContentSection';
import './App.css';
import ContentSection from './ContentSection';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContentSection 
          imageSource={"https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"}
          header={"NASA"}
          paragraphOne={"Nasa is a space agency in the US."}
          paragraphTwo={"Nasa's satellites provide data about Earth."}        
        />
        <Counter />
      </header>
    </div>
  );
}  

function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <button onClick={handleClick}>
      {count}
    </button>
  )
}
  
export default App;
