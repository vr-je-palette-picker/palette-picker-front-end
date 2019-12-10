import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;
  let hexCodes = ['', '', '', '', ''];

  beforeEach(() => {
    wrapper = shallow(<Container hexCodes={hexCodes} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
