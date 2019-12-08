import React from 'react';
import PaletteCard from './../PaletteCard/PaletteCard.js';

const ProjectContainer = ({ project }) => {
  const paletteCards = project.palettes.map(palette => {
    return (
      <PaletteCard palette={palette}/>
    )
  })
  return (
    <section>
      <h2>{project.project_name}</h2>
      { paletteCards }
      </section>
  )

}

export default ProjectContainer;