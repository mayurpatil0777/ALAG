import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MainParent from './components/MainParent';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-icons';


//import FirstDashboard from './components/FirstDashboard'

function App() {
  
  return (
    <div className="col-md-12">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>  */}

      <MainParent></MainParent>
    </div>
  );
}

export default App;
