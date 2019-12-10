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

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <div className='ColorCard' style={{ backgroundColor: this.state.hex }}>
        <h4 className='ColorCard__h4'>{this.state.hex}</h4>
        {this.state.selected ? (
          <IoMdCheckboxOutline onClick={this.handleClick} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default ColorCard;
