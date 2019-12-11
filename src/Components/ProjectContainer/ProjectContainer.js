import React from 'react';
import PaletteCard from './../PaletteCard/PaletteCard.js';

const ProjectContainer = ({ project }) => {
  console.log(project.project_name)
  const paletteCards = project.palettes.map((palette, index) => {
    return <PaletteCard key={index} palette={palette} />;
  });
  return (
    <section className='ProjectContainer'>
      <h2 className='ProjectContainer__h2--project-name'>
        {project.project}
      </h2>
      <section className='ProjectContainer__section'>{paletteCards}</section>
    </section>
  );
};

export default ProjectContainer;
