import React, { Component } from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';
import './ColorCard.scss';

class ColorCard extends Component {
  constructor({ hex }) {
    super();
    this.state = {
      selected: false,
      hex: hex
    };
  }

  render() {
    return (
      <div className='ColorCard' style={{ backgroundColor: this.state.hex }}>
        <h4 className='ColorCard__h4'>{this.state.hex}</h4>
        {this.state.selected ? (
          <IoMdCheckboxOutline />
        ) : (
          <MdCheckBoxOutlineBlank />
        )}
      </div>
    );
  }
}

export default ColorCard;
