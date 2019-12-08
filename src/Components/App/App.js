import React, { Component } from 'react';
import Container from './../Container/Container.js';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hexCodes: [],
      projects: []
    };
  }

  componentDidMount() {
    this.randomizeHex()
  }

  randomizeHex = () => {
    const hexCodes = [];
    const pound = '#'
    let i;
    for( i = 0 ; i < 5 ; i++) {
      hexCodes.push(pound + (Math.floor(Math.random() * 16777215).toString(16)));
    }
    this.setState({ hexCodes })
  };

  render() {
    return (
      <div className='App'>
        <h1>Palette Picker</h1>
        <Container hexCodes = {this.state.hexCodes}/>
      </div>
    );
  }
}

export default App;
