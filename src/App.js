import React from 'react';
import { Link } from "react-router-dom"
import './App.css';
let logo = './../icon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Electron Boilerplate</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className="App-link" to="/about">Hello World</Link>
      </header>
      
    </div>
  );
}

export default App;
