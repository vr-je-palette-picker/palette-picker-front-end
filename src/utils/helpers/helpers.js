export const cleanData = (projects, palettes) => {
  return projects.map(project => {
    return {
      id: project.id,
      project: project.project_name,
      palettes: palettes.filter(palette => palette.project_id === project.id)
    };
  });
};
