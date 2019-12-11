import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav.js';
import ColorCard from './../ColorCard/ColorCard.js';
import './Container.scss';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      color_1: {
        hex_code: '',
        locked: false
      },
      color_2: {
        hex_code: '',
        locked: false
      },
      color_3: {
        hex_code: '',
        locked: false
      },
      color_4: {
        hex_code: '',
        locked: false
      },
      color_5: {
        hex_code: '',
        locked: false
      }
    };
  }

  componentDidMount = () => {
    this.generateRandomColors();
  };

  generateRandomHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  generateRandomColors = () => {
    for (let color of ['color_1', 'color_2', 'color_3', 'color_4', 'color_5']) {
      if (!this.state[color].locked) {
        this.setState({
          [color]: {
            hex_code: this.generateRandomHex(),
            locked: false
          }
        });
      }
    }
  };

  generateColorCards = colors => {
    return colors.map((color, index) => {
      const { hex_code, locked } = color;
      return (
        <ColorCard
          key={index}
          color={`color_${index + 1}`}
          hex={hex_code}
          locked={locked}
          toggleLock={this.toggleLock}
        />
      );
    });
  };

  toggleLock = (hex, color) => {
    this.setState({
      [color]: {
        hex_code: hex,
        locked: !this.state[color].locked
      }
    });
  };

  render() {
    return (
      <main className='Container'>
        <HomeNav
          randomColors={this.generateRandomColors}
        />
        <section className='Container__section'>
          {this.generateColorCards([
            this.state.color_1,
            this.state.color_2,
            this.state.color_3,
            this.state.color_4,
            this.state.color_5
          ])}
        </section>
      </main>
    );
  }
}

export default Container;
