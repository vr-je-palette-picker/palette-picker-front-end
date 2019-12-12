import { cleanData } from './helpers';
import { mockProjects, mockPalettes } from '../mockData';

describe('helpers', () => {
  it('should clean fetched data', () => {
    const expected = [
      {
        id: 4,
        palettes: [],
        project: 'Portfolio Website'
      },
      {
        id: 5,
        palettes: [],
        project: 'Nature'
      }
    ];

    const result = cleanData(mockProjects, mockPalettes);
    expect(result).toEqual(expected);
  });
});
