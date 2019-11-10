/**
 * Root Component of the react app where every view and component are handled
 * @author - Shreya Shah
 */
import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import SmartcarFrontend from './components/smartcar-frontend';

class App extends Component {

  render() {
    return (
      <div className="smartcar-ui">
        <header className="main-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="headertitle">Smartcar</h1>
          <h1 className="headersubtitle">Interactive API Exploring Tool</h1>
        </header>
        <p></p>
        <SmartcarFrontend />
      </div>
    );
  }
}

export default App;
