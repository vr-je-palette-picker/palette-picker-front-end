import {
  getAllProjects,
  getAllPalettes,
  getProject,
  getPalettesInProject,
  getPalette,
  createNewProject,
  createNewPalette,
  deleteProject,
  deletePalette
} from './apiCalls';

const baseUrl = 'https://vr-je-palette-picker-api.herokuapp.com';

describe('getAllProjects', () => {
  const mockResponse = [
    {
      id: 1,
      project_name: 'Portfolio Website',
      created_at: '2019-12-06T20:35:56.724Z',
      updated_at: '2019-12-06T20:35:56.724Z'
    },
    {
      id: 2,
      project_name: 'Nature',
      created_at: '2019-12-06T20:35:56.736Z',
      updated_at: '2019-12-06T20:35:56.736Z'
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch with the correct url', () => {
    const url = `${baseUrl}/api/v1/projects`;

    getAllProjects(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
});

describe('getAllPalettes', () => {
  const mockResponse = [
    {
      id: 1,
      palette_name: 'Option 1',
      color_1: '#192435',
      color_2: '#678589',
      color_3: '#77ACA2',
      color_4: '#EDF3F3',
      color_5: '#C59563',
      project_id: 1
    },
    {
      id: 2,
      palette_name: 'Option 2',
      color_1: '#D8E2DC',
      color_2: '#FFE5D9',
      color_3: '#D1A6AE',
      color_4: '#9D8189',
      color_5: '#432F32',
      project_id: 1
    },
    {
      id: 3,
      palette_name: 'Ocean',
      color_1: '#020216',
      color_2: '#00042B',
      color_3: '#001E64',
      color_4: '#006CAD',
      color_5: '#00C0FA',
      project_id: 2
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch with the correct url', () => {
    const url = `${baseUrl}/api/v1/palettes`;

    getAllPalettes(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
});

describe('createNewProject', () => {
  const mockResponse = { id: 7 };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse.id)
      });
    });
  });

  it('should fetch with correct arguments', () => {
    const newProject = { project_name: 'New Project' };

    const url = `${baseUrl}/api/v1/projects`;

    const options = {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    createNewProject(newProject);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should post a new project', () => {
    const url = `${baseUrl}/api/v1/projects`;

    createNewProject(url).then(results =>
      expect(results).toEqual(mockResponse.id)
    );
  });

  it('should return an error with unsuccessful post', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    const url = `${baseUrl}/api/v1/projects`;

    expect(createNewProject(url)).rejects.toEqual(
      Error('Could not create new project, please try again later.')
    );
  });
});

describe('createNewPalette', () => {
  const mockResponse = { id: 7 };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse.id)
      });
    });
  });

  it('should fetch with all of the correct arguments', () => {
    const newPalette = {
      id: 1,
      palette_name: 'Option 1',
      color_1: '#192435',
      color_2: '#678589',
      color_3: '#77ACA2',
      color_4: '#EDF3F3',
      color_5: '#C59563',
      project_id: 1
    };

    const url = `${baseUrl}/api/v1/palettes/1`;

    const expected = {
      method: 'POST',
      body: JSON.stringify(newPalette),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    createNewPalette(newPalette);

    expect(window.fetch).toHaveBeenCalledWith(url, expected);
  });

  it('should post a new project', () => {
    const url = `${baseUrl}/api/v1/projects/1`;

    createNewPalette(url).then(results =>
      expect(results).toEqual(mockResponse.id)
    );
  });

  it('should return an error with unsuccessful post', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    const url = `${baseUrl}/api/v1/projects`;

    expect(createNewPalette(url)).rejects.toEqual(
      Error('Could not create new palette, please try again later.')
    );
  });
});

describe('deleteProject', () => {
  let projectToDelete;
  beforeEach(() => {
    projectToDelete = { project_name: 'A Project', id: 8 };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });
  });

  it('should be called with the correct arguments', () => {
    const url = `${baseUrl}/api/v1/projects/${projectToDelete.id}`;

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    deleteProject(projectToDelete.id);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should delete project', () => {
    const url = `${baseUrl}/api/v1/projects/${projectToDelete.id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    deleteProject(projectToDelete.id);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an error with an unsuccessful delete', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    const url = `${baseUrl}/api/v1/projects/-1`;

    expect(deleteProject(url)).rejects.toEqual(
      Error('Could not delete project, please try again later.')
    );
  });
});

describe('deletePalette', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });
  });

  it('should be called with the correct arguments', () => {
    const paletteToDelete = {
      id: 1,
      palette_name: 'Option 1',
      color_1: '#192435',
      color_2: '#678589',
      color_3: '#77ACA2',
      color_4: '#EDF3F3',
      color_5: '#C59563',
      prect_id: 1
    };

    const url = `${baseUrl}/api/v1/palette/${paletteToDelete.id}`;

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    deletePalette(paletteToDelete.id);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should delete palette', () => {
    const url = `${baseUrl}/api/v1/palette/8`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    deletePalette(8);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an error with an unsuccessful delete', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    const url = `${baseUrl}/api/v1/palettes/-1`;

    expect(deletePalette(url)).rejects.toEqual(
      Error('Could not delete palette, please try again later.')
    );
  });
});
