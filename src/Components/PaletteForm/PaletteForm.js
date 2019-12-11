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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  makeSelectOptions = () => {
    const { projects } = this.props;
    return projects.map((project, index) => {
      return (
        <option value={project.project} key={index}>
          {project.project}
        </option>
      );
    });
  };

  cancelNewPalette = () => {
    const { close } = this.props;
    this.setState({ paletteName: '', project: '' });
    close();
  };

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
          name='paletteName'
          type='text'
          placeholder='Palette Name'
          value={this.state.paletteName}
          onChange={this.handleChange}
        ></input>
        <label className='PaletteForm__label--project' htmlFor='project'>
          Choose A Project:
        </label>
        <select
          className='PaletteForm__select--project'
          onChange={e => this.setState({ project: e.target.value })}
          value={
            this.state.project ? this.state.project : 'Please select a project'
          }
        >
          {this.makeSelectOptions()}
        </select>
        <button
          className='PaletteForm__button--cancel'
          type='button'
          onClick={this.cancelNewPalette}
        >
          Cancel
        </button>
        <button className='PaletteForm__button--save' type='button'>
          Save
        </button>
      </div>
    );
  }
}

export default PaletteForm;
