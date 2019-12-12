import React from 'react';
import { shallow } from 'enzyme';
import PaletteCard from './PaletteCard';
import { deletePalette } from '../../utils/apiCalls/apiCalls';

jest.mock('../../utils/apiCalls/apiCalls');

describe('PaletteCard', () => {
  let wrapper;
  let palette = {
    palette_name: 'Testing 123',
    color_1: '000000',
    color_2: '00FF00',
    color_3: '999999',
    color_4: '990099',
    color_5: 'FFFFFF',
    project_id: 2
  };
  let fetchProjects = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <PaletteCard palette={palette} fetchProjects={fetchProjects} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
