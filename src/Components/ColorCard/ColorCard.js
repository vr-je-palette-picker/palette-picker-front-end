import React, { Component } from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';
import './ColorCard.scss';

class ColorCard extends Component {
  render() {
    const { color, hex, locked, toggleLock } = this.props;
    return (
      <div className='ColorCard' id={hex} style={{ backgroundColor: hex }}>
        <div className='ColorCard__div--space'></div>
        <footer className='ColorCard__footer'>
          {locked ? (
            <IoMdCheckboxOutline className='ColorCard__lock--icon' onClick={() => toggleLock(hex, color)} />
            ) : (
              <MdCheckBoxOutlineBlank className='ColorCard__lock--icon' onClick={() => toggleLock(hex, color)} />
              )}
          <h4 className='ColorCard__h4'>{hex}</h4>
        </footer>
      </div>
    );
  }
}

export default ColorCard;
