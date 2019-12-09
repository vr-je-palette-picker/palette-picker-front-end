import React, { Component } from 'react';
import './ProjectNav.scss';

export class ProjectNav extends Component {
  render() {
    return (
      <div className='ProjectNav'>
        <button className='ProjectNav__button--new-project'>New Project</button>
        <select className='ProjectNav__select--project'>
          {/* map through projects in state */}
        </select>
      </div>
    );
  }
}

export default ProjectNav;
