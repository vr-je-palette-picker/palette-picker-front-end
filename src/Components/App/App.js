import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      projects: []
    };
  }

  randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  render() {
    return (
      <div className='App'>
        <h1>Palette Picker</h1>
      </div>
    );
  }
}

export default App;
