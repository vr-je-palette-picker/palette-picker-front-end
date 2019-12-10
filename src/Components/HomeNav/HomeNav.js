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
        <IoMdRefresh />
        <GiSave />
        <Link to='/projects'>
          <FaRegFolder />
        </Link>
      </div>
    );
  }
}

export default HomeNav;
