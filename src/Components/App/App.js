import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNav from '../HomeNav/HomeNav.js';
import ProjectNav from '../ProjectNav/ProjectNav.js';
import Container from './../Container/Container.js';
import ProjectContainer from './../ProjectContainer/ProjectContainer.js';
import { getAllProjects } from '../../utils/apiCalls/apiCalls';
import { cleanData } from '../../utils/helpers/helpers';
import './App.scss';
require('dotenv').config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    let projects = await getAllProjects();
    // cleanData(projects);
    await this.setState({ projects });
  };

  createProjectContainers = () => {
    return this.state.projects.map((project, index) => {
      return <ProjectContainer key={index} project={project} />;
    });
  };

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <>
                <HomeNav />
                <Container />
              </>
            )}
          />
          <Route
            exact
            path='/projects'
            render={() => (
              <>
                <ProjectNav projects={this.state.projects} />
                <Container hexCodes={this.createProjectContainers()} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
