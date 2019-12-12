import React, { Component } from 'react';
import { createNewProject } from '../../utils/apiCalls/apiCalls.js';
import './ProjectNav.scss';

export class ProjectNav extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  checkUnique = () => {
    const { projects } = this.props;
    let unique = true;
    projects.forEach(project => {
      if (
        this.state.input === project.project ||
        this.state.input === '' ||
        this.state.input === 'Enter Unique Project Name'
      ) {
        return (unique = false);
      }
    });

    if (unique) {
      return this.createNew();
    } else {
      this.setState({ input: 'Enter Unique Project Name' });
    }
  };

  createNew = async () => {
    const { fetchProjects } = this.props;

    await createNewProject({ project_name: this.state.input });
    this.setState({ input: '' });
    await fetchProjects();
  };

  render() {
    return (
      <div className='ProjectNav'>
        <h1 className='ProjectNav__h1--title'>Palette Projects</h1>
        <div className='ProjectNav__div--add-container'>
          <input
            placeholder='Enter Project Name'
            id='new-project-input'
            value={this.state.input}
            onChange={e => this.handleChange(e)}
          />
          <p
            className='ProjectNav__button--new-project'
            onClick={() => this.checkUnique()}
          >
            Add New Project
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectNav;
