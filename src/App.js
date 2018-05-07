import React, { Component } from 'react';
import './App.css';
import Artists from './components/Artists';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MUSIC BOX</h1>
          <p>A place for you to chill</p>
        </header>
        <Artists />
        <Footer />
      </div>
    );
  }
}

export default App;
