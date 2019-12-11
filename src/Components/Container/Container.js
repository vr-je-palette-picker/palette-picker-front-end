import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav.js';
import ColorCard from './../ColorCard/ColorCard.js';
import ReactModal from 'react-modal';
import PaletteForm from '../PaletteForm/PaletteForm.js';
import { createNewPalette } from '../../utils/apiCalls/apiCalls.js';
import './Container.scss';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      color_1: {
        hex_code: '',
        locked: false
      },
      color_2: {
        hex_code: '',
        locked: false
      },
      color_3: {
        hex_code: '',
        locked: false
      },
      color_4: {
        hex_code: '',
        locked: false
      },
      color_5: {
        hex_code: '',
        locked: false
      },
      showModal: false
    };
  }

  componentDidMount = () => {
    this.generateRandomColors();
  };

  updateFormModalState = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  generateRandomHex = () => {
    return (
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()
    );
  };

  generateRandomColors = () => {
    for (let color of ['color_1', 'color_2', 'color_3', 'color_4', 'color_5']) {
      if (!this.state[color].locked) {
        this.setState({
          [color]: {
            hex_code: this.generateRandomHex(),
            locked: false
          }
        });
      }
    }
  };

  generateColorCards = colors => {
    return colors.map((color, index) => {
      const { hex_code, locked } = color;
      return (
        <ColorCard
          key={index}
          color={`color_${index + 1}`}
          hex={hex_code}
          locked={locked}
          toggleLock={this.toggleLock}
        />
      );
    });
  };

  toggleLock = (hex, color) => {
    this.setState({
      [color]: {
        hex_code: hex,
        locked: !this.state[color].locked
      }
    });
  };

  findProjectByName = projectName => {
    const { projects } = this.props;
    let foundProjectId = projects.find(project => {
      return project.project === projectName;
    });
    return foundProjectId;
  };

  createNewPaletteObject = async (projectName, project_id) => {
    let newPalette = {
      palette_name: projectName,
      project_id: project_id.id,
      color_1: this.state.color_1.hex_code,
      color_2: this.state.color_2.hex_code,
      color_3: this.state.color_3.hex_code,
      color_4: this.state.color_4.hex_code,
      color_5: this.state.color_5.hex_code
    };
    let posted = await createNewPalette(newPalette);
    return posted;
  };

  render() {
    const { projects } = this.props;
    return (
      <main className='Container'>
        <HomeNav
          randomColors={this.generateRandomColors}
          showModal={this.updateFormModalState}
        />
        <section className='Container__section'>
          {this.generateColorCards([
            this.state.color_1,
            this.state.color_2,
            this.state.color_3,
            this.state.color_4,
            this.state.color_5
          ])}
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.updateFormModalState}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              },
              content: {
                position: 'fixed',
                top: 100,
                left: 300,
                right: 300,
                bottom: 100
              }
            }}
            className='PaletteForm'
            overlayClassName='PaletteFormOverlay'
          >
            <PaletteForm
              projects={projects}
              close={this.updateFormModalState}
              newPalette={this.createNewPaletteObject}
              findProjectByName={this.findProjectByName}
            />
          </ReactModal>
        </section>
      </main>
    );
  }
}

export default Container;
