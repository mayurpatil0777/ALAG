import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/LoginComp/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="">
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>  */}

<Login className="bg">
</Login>
    </div>
  );
}

export default App;
