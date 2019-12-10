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

  // it('should call fetch with the correct URL', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve(mockResponse)
  //     });
  //   });
  //   getAllMovies();

  //   expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
  // });

  // it('Should return an object with 7 movie objects', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve(mockResponse)
  //     });
  //   });
  //   getAllMovies().then(movies => expect(movies).toEqual(mockResponse));
  // });

  // it('should return catch error if promise rejects', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.reject({
  //       ok: false
  //     });
  //   });
  //   getAllMovies().catch(e => expect(e).toMatch('error'));
  // });
});
