import React, { Component } from 'react';
import { createNewProject } from '../../utils/apiCalls/apiCalls.js'
import './ProjectNav.scss';

export class ProjectNav extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  // createProjectSelectOptions = () => {
  //   const { projects } = this.props;
  //   let options = projects.map((project, index) => {
  //     return <option key={index} value={project.project_name}></option>;
  //   });
  //   return options;
  // };

  handleChange = (e) => {
    this.setState({input: e.target.value});
  };

  createNew = () => {
    createNewProject({project_name: this.state.input});
  };

  render() {
    return (
      <div className='ProjectNav'>
        <h1 className='ProjectNav__h1--title'>Palette Picker</h1>
        <input placeholder='Enter Project Name' id='new-project-input' onChange={(e) => this.handleChange(e)}/>
        <p className='ProjectNav__button--new-project' onClick={() => this.createNew()}>Add New Project</p>
        {/* <select className='ProjectNav__select--project'>
          {this.createProjectSelectOptions()}
        </select> */}
      </div>
    );
  }
}

export default ProjectNav;
