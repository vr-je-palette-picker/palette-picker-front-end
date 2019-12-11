import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectNav from '../ProjectNav/ProjectNav.js';
import Container from './../Container/Container.js';
import ProjectPage from '../ProjectPage/ProjectPage.js';
import ReactModal from 'react-modal';
import { getAllProjects, getAllPalettes } from '../../utils/apiCalls/apiCalls';
import { cleanData } from '../../utils/helpers/helpers';
import './App.scss';
if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');
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
    try {
      let projects = await getAllProjects();
      let palettes = await getAllPalettes();
      let cleanedData = cleanData(projects, palettes);
      await this.setState({ projects: cleanedData });
    } catch(error) {
      throw new Error(error)
    }
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
                <Container projects={this.state.projects} />
              </>
            )}
          />
          <Route
            exact
            path='/projects'
            render={() => (
              <>
                <ProjectNav projects={this.state.projects} />
                <ProjectPage projects={this.state.projects} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
