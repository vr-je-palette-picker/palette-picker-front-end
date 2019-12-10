import React from 'react';
import { shallow } from 'enzyme';
import ProjectNav from './ProjectNav';

describe('ProjectNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectNav />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})