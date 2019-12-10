import React from 'react';
import { shallow } from 'enzyme';
import HomeNav from './HomeNav';

describe('HomeNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeNav />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})