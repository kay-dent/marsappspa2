import React from 'react';
import landingBody from './ContentSection';
import './App.css';
import ContentSection from './ContentSection';

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
