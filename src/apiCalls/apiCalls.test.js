import {
  getAllProjects,
  getProject,
  getPalettesInProject,
  getPalette,
  createNewProject,
  createNewPalette
} from './apiCalls';

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
});
