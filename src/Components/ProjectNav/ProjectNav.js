import React, { Component } from 'react';
import './ProjectNav.scss';

export class ProjectNav extends Component {
  createProjectSelectOptions = () => {
    const { projects } = this.props;
    let options = projects.map((project, index) => {
      return <option key={index} value={project.project_name}></option>;
    });
    return options;
  };

  render() {
    return (
      <div className='ProjectNav'>
        <h1 className='ProjectNav__h1--title'>Palette Picker</h1>
        <button className='ProjectNav__button--new-project'>New Project</button>
        <select className='ProjectNav__select--project'>
          {this.createProjectSelectOptions()}
        </select>
      </div>
    );
  }
}

export default ProjectNav;
