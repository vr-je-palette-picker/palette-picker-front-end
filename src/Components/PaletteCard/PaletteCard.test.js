import React from 'react';
import { shallow } from 'enzyme';
import PaletteCard from './PaletteCard';

describe('PaletteCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PaletteCard />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})