import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdRefresh } from 'react-icons/io';
import { GiSave } from 'react-icons/gi';
import { FaRegFolder } from 'react-icons/fa';
import './HomeNav.scss';

export class HomeNav extends Component {
  render() {
    return (
      <div className='HomeNav'>
        <h1 className='HomeNav__h1--title'>Palette Picker</h1>
        <div className='HomeNav__div--icon-container'>
          <IoMdRefresh className='HomeNav__icon' />
          <GiSave className='HomeNav__icon' />
          <Link to='/projects'>
            <FaRegFolder className='HomeNav__icon' />
          </Link>
        </div>
      </div>
    );
  }
}
export default HomeNav;
