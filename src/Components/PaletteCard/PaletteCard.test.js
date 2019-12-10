import React from 'react';
import { shallow } from 'enzyme';
import PaletteCard from './PaletteCard';

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

  beforeEach(() => {
    wrapper = shallow(<PaletteCard palette={palette} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
