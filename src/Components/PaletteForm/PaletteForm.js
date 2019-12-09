import React, { Component } from 'react';
import './PaletteForm.scss';

export class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      project: ''
    };
  }

  render() {
    return (
      <div className='PaletteForm'>
        <h2 className='PaletteForm__h2--title'>Save New Palette</h2>
        <label
          className='PaletteForm__label--palette-name'
          htmlFor='paletteName'
        >
          Palette Name:
        </label>
        <input
          className='PaletteForm__input--palette-name'
          type='text'
          placeholder='Palette Name'
          value={this.state.paletteName}
        ></input>
        <label className='PaletteForm__label--project' htmlFor='project'>
          Choose A Project:
        </label>
        <select className='PaletteForm__select--project'>
          {/* map through projects in App state */}
        </select>
      </div>
    );
  }
}
