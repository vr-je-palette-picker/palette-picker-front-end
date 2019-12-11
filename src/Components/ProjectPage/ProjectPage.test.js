import React from 'react';
import { shallow } from 'enzyme';
import ProjectPage from './ProjectPage';

describe('ProjectPage', () => {
  let wrapper;
  let projects = [{}, {}, {}];

  beforeEach(() => {
    wrapper = shallow(<ProjectPage projects={projects} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
