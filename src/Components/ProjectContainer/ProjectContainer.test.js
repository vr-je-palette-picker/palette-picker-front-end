import React from 'react';
import { shallow } from 'enzyme';
import ProjectContainer from './ProjectContainer';

describe('ProjectContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectContainer />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})