import React, { Component } from 'react';

class ColorCard extends Component {
  constructor({ hex }) {
    super();
    this.state = {
      locked: false,
      hex,
    }
  }

  render() {
    return (
    <div>
      <h4>{ this.state.hex }</h4>
    </div>
    )
  }
}

export default ColorCard;