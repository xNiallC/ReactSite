import React, { Component } from 'react';
import './App.css';
import { styles } from './styles/styles';
import { Navbar } from './components/Navbar';

const overrallStyle = {
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  margin: 0,
  padding: 0
}

class App extends Component {
  render() {
    return (
      <div className="App" style={overrallStyle}>
        <Navbar/>
        Poop
      </div>
    );
  }
}

export default App;
