import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import PaletteCard from './../PaletteCard/PaletteCard.js';
import { deleteProject } from './../../utils/apiCalls/apiCalls.js'

const ProjectContainer = ({ project, fetchProjects }) => {
  const paletteCards = project.palettes.map((palette, index) => {
    return <PaletteCard key={index} palette={palette} />;
  });
  const handleDelete = async (id) => {
    await deleteProject(id)
    return await fetchProjects()
  }

  return (
    <section className='ProjectContainer'>
      <header className='ProjectContainer__header'>
        <h2 className='ProjectContainer__h2--project-name'>
          {project.project}
        </h2>
        <MdDeleteForever
          className='ProjectContainer__header--delete-icon'
          onClick={() => handleDelete(project.id)}
        />
      </header>
      <section className='ProjectContainer__section'>{paletteCards}</section>
    </section>
  );
};

export default ProjectContainer;
