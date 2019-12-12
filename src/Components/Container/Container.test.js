import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;
  let hexCodes = ['', '', '', '', ''];
  global.Math.random = jest
    .spyOn(global.Math, 'random')
    .mockImplementation(() => 0.5);

  beforeEach(() => {
    wrapper = shallow(<Container hexCodes={hexCodes} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
