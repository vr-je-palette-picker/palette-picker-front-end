export const getAllProjects = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/projects`
  );
  if (!response.ok) {
    throw new Error('Could not retrieve projects, please try again later.');
  }
  const data = await response.json();
console.log('in getAllProjects')
  return data;
};

export const getAllPalettes = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/palettes`
  );
  if (!response.ok) {
    throw new Error('Could not retrieve palettes, please try again later.');
  }
  const data = await response.json();

  return data;
};

export const getProject = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/projects/${id}`
  );
  if (!response.ok) {
    throw new Error('Could not retrieve project, please try again later.');
  }
  const data = await response.json();

  return data;
};

export const getPalettesInProject = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/palettes/${id}`
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
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/palette/${id}`
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
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/projects}`,
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
    `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/palettes/${palette.project_id}`,
    options
  );
  const data = await response.json();

  return data;
};

export const updateProjectName = async id => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify({
      completed: true
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }
  const response = await fetch(`${process.env.REACT_APP_PRODUCTION_URL}/api/v1/projects/${id}`, options);
  const data = response.json();

  return data;
}

export const updatePalette = async id => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify({
      completed: true
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }
  const response = await fetch(`${process.env.REACT_APP_PRODUCTION_URL}/api/v1/palette/${id}`, options);
  const data = response.json();

  return data;
}

export const deleteProject = async id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(`${process.env.REACT_APP_PRODUCTION_URL}/api/v1/projects/${id}`, options)
  const data = response.json();

  return data;
}

export const deletePalette = async id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(`${process.env.REACT_APP_PRODUCTION_URL}/api/v1/palette/${id}`, options)
  const data = response.json();

  return data;
}
