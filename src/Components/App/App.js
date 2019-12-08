import React, { Component } from 'react';
import ColorCard from './../ColorCard/ColorCard.js';
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
    let i;
    for( i = 0 ; i < 5 ; i++) {
      hexCodes.push(Math.floor(Math.random() * 16777215).toString(16));
    }
    this.setState({ hexCodes })
  };

  render() {
    const colorCards = this.state.hexCodes.map(hex => {
      return <ColorCard hex={hex}/>
    })
    console.log('colorCards', colorCards)
    return (
      <div className='App'>
        <h1>Palette Picker</h1>
        <section>
          { colorCards }
        </section>
      </div>
    );
  }
}

export default App;
