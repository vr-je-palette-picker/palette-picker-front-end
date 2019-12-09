import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import HomeNav from '../HomeNav/HomeNav.js';
import ProjectNav from '../ProjectNav/ProjectNav.js';
import Container from './../Container/Container.js';
import ProjectContainer from './../ProjectContainer/ProjectContainer.js';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hexCodes: [],
      projects: [
        {
          project_name: 'project 1',
          palettes: [
            {
              palette_name: 'cool',
              color_1: '#3D3935',
              color_2: '#009DDC',
              color_3: '#F26430',
              color_4: '#F1F1F1',
              color_5: '#009B72'
            },
            {
              palette_name: 'wowzah',
              color_1: '#3D3935',
              color_2: '#009DDC',
              color_3: '#F26430',
              color_4: '#F1F1F1',
              color_5: '#009B72'
            }
          ]
        },
        {
          project_name: 'project TWO',
          palettes: [
            {
              palette_name: 'neat',
              color_1: '#3D3935',
              color_2: '#009DDC',
              color_3: '#F26430',
              color_4: '#F1F1F1',
              color_5: '#009B72'
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    this.randomizeHex();
  }

  randomizeHex = () => {
    const hexCodes = [];
    let i;
    for (i = 0; i < 5; i++) {
      hexCodes.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    this.setState({ hexCodes });
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
                <Nav>
                  <HomeNav />
                </Nav>
                <Container hexCodes={this.state.hexCodes} />
              </>
            )}
          />
          <Route
            exact
            path='/projects'
            render={() => (
              <>
                <Nav>
                  <ProjectNav projects={this.state.projects} />
                </Nav>
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
