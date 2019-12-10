import React from 'react';
import { shallow } from 'enzyme';
import ProjectNav from './ProjectNav';

describe('ProjectNav', () => {
  let wrapper;
  let projects = [
    {}, {}, {}
  ]

  beforeEach(() => {
    wrapper = shallow(<ProjectNav projects={projects}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})