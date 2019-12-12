import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer/ProjectContainer.js';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import './ProjectPage.scss';

class ProjectPage extends Component {
  createProjectContainers = () => {
    const { projects, fetchProjects } = this.props;
    return projects.map((project, index) => {
      return <ProjectContainer key={index} project={project} fetchProjects={fetchProjects}/>;
    });
  };

  render() {
    return (
    <main>
      <p className='back-button-p'>
        <Link className='link back-button' to='/'>
          <TiArrowBackOutline />
          Back to Palette Picker
        </Link>
        </p>
    <div 
      className='ProjectPage'>{this.createProjectContainers()}
    </div>
    </main>
    )
  }
}

export default ProjectPage;
