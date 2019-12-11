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

    getAllProjects();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array of projects when getAllProjects is called', () => {
    expect(getAllProjects()).resolves.toEqual(mockResponse);
  });

  it('should return an error if fetchAllProjects property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getAllProjects()).rejects.toEqual(
      Error('Could not retrieve projects, please try again later.')
    );
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

    getAllPalettes();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array of palettes when getAllPalettes is called', () => {
    expect(getAllPalettes()).resolves.toEqual(mockResponse);
  });

  it('should return an error if getAllPalettes property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getAllPalettes()).rejects.toEqual(
      Error('Could not retrieve palettes, please try again later.')
    );
  });
});

describe('getPalette', () => {
  const mockResponse = {
    id: 3,
    palette_name: 'Ocean',
    color_1: '#020216',
    color_2: '#00042B',
    color_3: '#001E64',
    color_4: '#006CAD',
    color_5: '#00C0FA',
    project_id: 2
  };
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch with the correct arguments', () => {
    const url = `${baseUrl}/api/v1/palette/3`;

    getPalette(mockResponse.id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array with a palette object', () => {
    expect(getPalette(mockResponse.id)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getPalette property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getPalette(-5)).rejects.toEqual(
      Error('Could not retrieve palette, please try again later.')
    );
  });
});

describe('getPalette', () => {
  
})

describe('getProject', () => {
  const mockResponse = { id: 7, project_name: 'New Project' };
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse.id)
      });
    });
  });

  it('should fetch with the correct arguments', () => {
    const url = `${baseUrl}/api/v1/projects/7`;

    getProject(mockResponse.id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a project object with project_name and id', () => {
    expect(getProject(mockResponse.id)).resolves.toEqual(mockResponse.id);
  });

  it('should return an error if getProject property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getProject()).rejects.toEqual(
      Error('Could not retrieve project, please try again later.')
    );
  });
});

describe('getPalettesInProject', () => {
  const mockResponse = [
    {
      id: 10,
      palette_name: 'Option 1',
      color_1: '#192435',
      color_2: '#678589',
      color_3: '#77ACA2',
      color_4: '#EDF3F3',
      color_5: '#C59563',
      project_id: 4
    },
    {
      id: 11,
      palette_name: 'Option 2',
      color_1: '#D8E2DC',
      color_2: '#FFE5D9',
      color_3: '#D1A6AE',
      color_4: '#9D8189',
      color_5: '#432F32',
      project_id: 4
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

  it('should fetch with the correct arguments', () => {
    const url = `${baseUrl}/api/v1/palettes/4`;

    getPalettesInProject(4);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array of palettes in a single project', () => {
    expect(getPalettesInProject(4)).resolves.toEqual(mockResponse);
  });

  it('should return an error if getPalettesInProject property ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getPalettesInProject()).rejects.toEqual(
      Error(
        'Could not retrieve palettes within project, please try again later.'
      )
    );
  });
});

describe('getPalettesInProject', () => {
    const mockResponse = [
      {
        id: 10,
        palette_name: 'Option 1',
        color_1: '#192435',
        color_2: '#678589',
        color_3: '#77ACA2',
        color_4: '#EDF3F3',
        color_5: '#C59563',
        project_id: 4
      },
      {
        id: 11,
        palette_name: 'Option 2',
        color_1: '#D8E2DC',
        color_2: '#FFE5D9',
        color_3: '#D1A6AE',
        color_4: '#9D8189',
        color_5: '#432F32',
        project_id: 4
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

    it('should fetch with the correct arguments', () => {
      const url = `${baseUrl}/api/v1/palettes/4`;

      getPalettesInProject(4);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an array of palettes in a single project', () => {
      expect(getPalettesInProject(4)).resolves.toEqual(mockResponse);
    });

    it('should return an error if getPalettesInProject property ok is false', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getPalettesInProject()).rejects.toEqual(
        Error(
          'Could not retrieve palettes within project, please try again later.'
        )
      );
    });
})

describe('createNewProject', () => {
  const mockResponse = { id: 7 };
  let newProject;
  const url = `${baseUrl}/api/v1/projects`;

  beforeEach(() => {
    newProject = { project_name: 'New Project' };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse.id)
      });
    });
  });

  it('should fetch with correct arguments', () => {
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

  it('should return the new project id upon successful post', () => {
    createNewProject(newProject).then(results =>
      expect(results).toEqual(mockResponse.id)
    );
  });

  it('should return an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(createNewProject(newProject)).rejects.toEqual(
      Error('Could not create new project, please try again later.')
    );
  });
});

describe('createNewPalette', () => {
  const mockResponse = { id: 7 };
  let newPalette;

  beforeEach(() => {
    newPalette = {
      id: 1,
      palette_name: 'Option 1',
      color_1: '#192435',
      color_2: '#678589',
      color_3: '#77ACA2',
      color_4: '#EDF3F3',
      color_5: '#C59563',
      project_id: 1
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse.id)
      });
    });
  });

  it('should fetch with all of the correct arguments', () => {
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

  it('should post a new project', async () => {
    let results = await createNewPalette(newPalette);
    expect(results).toEqual(mockResponse.id);
  });

  it('should return an error with unsuccessful post', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(createNewPalette(newPalette)).rejects.toEqual(
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

    let projectToFailDelete = { project_name: 'A Project', id: -80 };

    expect(deleteProject(projectToFailDelete)).rejects.toEqual(
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
      project_id: 1
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
    const paletteToFailDelete = {
      id: 1,
      palette_name: 'Option 1',
      color_1: '#192435',
      color_2: '#678589',
      color_3: '#77ACA2',
      color_4: '#EDF3F3',
      color_5: '#C59563',
      project_id: -100
    };

    expect(deletePalette(paletteToFailDelete)).rejects.toEqual(
      Error('Could not delete palette, please try again later.')
    );
  });
});
