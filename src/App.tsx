import React from 'react';
import './App.css';
import ContentSection from './ContentSection';
import { useEffect, useState } from 'react';
import CounterWithTree from './CounterWithTree';

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

        <CounterWithTree/>
      </header>
    </div>
  );
}  

function Counter() {

  const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0)

  useEffect(() => {
    localStorage.setItem("count", `${count}`)
  })

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
