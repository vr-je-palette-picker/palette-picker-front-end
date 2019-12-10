import React from 'react';
import { shallow } from 'enzyme';
import ProjectContainer from './ProjectContainer';

describe('ProjectContainer', () => {
  let wrapper;
  let project = {
    palettes: [{}, {}, {}]
  };
  let key = 1;

  beforeEach(() => {
    wrapper = shallow(<ProjectContainer key={key} project={project} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
