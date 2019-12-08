import React, { Component } from 'react';
import './ColorCard.scss'

class ColorCard extends Component {
  constructor({ hex }) {
    super();
    this.state = {
      locked: false,
      hex: hex
    }
  }

  render() {
    return (
    <div>
      <h4 style={{backgroundColor: this.state.hex}}>{ this.state.hex }</h4>
    </div>
    )
  }
}
// style={{backgroundColor: bgColors.Yellow}}
export default ColorCard;