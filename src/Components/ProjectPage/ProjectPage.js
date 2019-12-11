import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer/ProjectContainer.js';
import './ProjectPage.scss';

class ProjectPage extends Component {
  createProjectContainers = () => {
    const { projects } = this.props;
    return projects.map((project, index) => {
      console.log(project)
      return <ProjectContainer key={index} project={project} />;
    });
  };

  render() {
    return <div className='ProjectPage'>{this.createProjectContainers()}</div>;
  }
}

export default ProjectPage;
