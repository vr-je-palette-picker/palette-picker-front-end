import React, { Component } from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';
import './ColorCard.scss';

class ColorCard extends Component {
  render() {
    const { color, hex, locked, toggleLock } = this.props;
    return (
      <div className='ColorCard' id={hex} style={{ backgroundColor: hex }}>
        <h4 className='ColorCard__h4'>{hex}</h4>
        {locked ? (
          <IoMdCheckboxOutline onClick={() => toggleLock(hex, color)} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => toggleLock(hex, color)} />
        )}
      </div>
    );
  }
}

export default ColorCard;
