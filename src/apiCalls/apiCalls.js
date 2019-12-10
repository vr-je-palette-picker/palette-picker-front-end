require('dotenv').config();

export const getAllProjects = async () => {
  const response = await fetch(
    `https://vr-je-palette-picker-api.herokuapp.com/api/v1/`
    // `${process.env.REACT_APP_PRODUCTION_URL}projects`
  );
  if (!response.ok) {
    throw new Error('Could not retrieve projects, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getProject = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}projects/${id}`
  );
  if (!response.ok) {
    throw new Error('Could not retrieve project, please try again later.');
  }
  const data = await response.json();
  return data;
};

export const getPalettesInProject = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}palettes/${id}`
  );
  if (!response.ok) {
    throw new Error(
      'Could not retrieve palettes within project, please try again later.'
    );
  }
  const data = await response.json();
  return data;
};

export const getPalette = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}palette/${id}`
  );
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
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}projects}`,
    options
  );
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
    `${process.env.REACT_APP_PRODUCTION_URL}palettes/${palette.project_id}`,
    options
  );
  const data = await response.json();
  return data;
};
