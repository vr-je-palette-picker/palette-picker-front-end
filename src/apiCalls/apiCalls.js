const baseUrl = 'https://vr-je-palette-picker-api.herokuapp.com/api/v1/';

export const getAllProjects = async () => {
  const response = await fetch(`${baseUrl}projects`);
  if (!response.ok) {
    throw new Error('Could not retrieve projects, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getProject = async id => {
  const response = await fetch(`${baseUrl}projects/${id}`);
  if (!response.ok) {
    throw new Error('Could not retrieve project, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getPalettesInProject = async id => {
  const response = await fetch(`${baseUrl}palettes/${id}`);
  if (!response.ok) {
    throw new Error(
      'Could not retrieve palettes within project, please try again later.'
    );
  }
  const data = await response.json();
  return data;
};

export const getPalette = async id => {
  const response = await fetch(`${baseUrl}palette/${id}`);
  if (!response.ok) {
    throw new Error('Could not retrieve palette, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const createNewProject = async project => {
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${baseUrl}projects}`, options);
  const data = await response.json();
  return data;
};

export const createNewPalette = async palette => {
  const options = {
    method: 'POST',
    body: JSON.stringify(palette),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(
    `${baseUrl}palettes/${palette.project_id}`,
    options
  );
  const data = await response.json();
  return data;
};
