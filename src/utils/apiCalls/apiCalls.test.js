import {
  getAllProjects,
  getAllPalettes,
  getProject,
  getPalettesInProject,
  getPalette,
  createNewProject,
  createNewPalette
} from './apiCalls';

const baseUrl = 'https://vr-je-palette-picker-api.herokuapp.com'

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

  it ('should fetch with the correct url', () => {
    const url = `${baseUrl}/api/v1/projects`;
    
    getAllProjects(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
});


// ALL PALETTES
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
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it ('should fetch with the correct url', () => {
    const url = `${baseUrl}/api/v1/palettes`;
    
    getAllPalettes(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
});

describe('createNewProject', () => {
  const mockResponse = { id: 7}

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse.id)
      });
    });
  });
  
  it ('should fetch with correct arguments', () => {
    const newProject = { project_name: 'New Project' };
  
    const url = `${baseUrl}/api/v1/projects`;

    const expected = {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    createNewProject(newProject)

    expect(window.fetch).toHaveBeenCalledWith(url, expected);
  });

  it ('should post a new project', () => {
    const url = `${baseUrl}/api/v1/projects`;

    createNewProject(url)
    .then(results => expect(results).toEqual(mockResponse.id))
  });

});


// A SINGLE PROJECT
// describe('getProject', () => {
//   const mockResponse = {
//       id: 2,
//       project_name: 'Nature',
//       created_at: '2019-12-06T20:35:56.736Z',
//       updated_at: '2019-12-06T20:35:56.736Z'
//     }

//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => {
//       return Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockResponse)
//       });
//     });
//   });

//   it ('should fetch with the correct url', () => {
//     window.fetch.mockClear();
//     const url = `${baseUrl}/api/v1/projects${mockResponse.id}`;
    
//     getProject(url);

//     expect(window.fetch).toHaveBeenCalledWith(url);
//   });
// });


