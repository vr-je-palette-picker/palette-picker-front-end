import React from 'react';
import { shallow } from 'enzyme';
import ProjectNav from './ProjectNav';

describe('ProjectNav', () => {
  let wrapper;
  let projects = [
    {
      project: ''
    },
    {
      project: ''
    },
    {
      project: ''
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<ProjectNav projects={projects} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'input',
        value: 'Living Room Remodel'
      }
    };
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual({ input: 'Living Room Remodel' });
  });

  it('should call handleChange onChange', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('input').simulate('change');

    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should call checkUnique onClick', () => {
    wrapper.instance().checkUnique = jest.fn();
    wrapper.find('p').simulate('click');

    expect(wrapper.instance().checkUnique).toHaveBeenCalled();
  });

  it('should return unique = false,', () => {
    wrapper.instance().checkUnique();
    expect(wrapper.state('input')).toEqual('Enter Unique Project Name');
  });

  it('should return unique = true', () => {
    let projects = [
      {
        project: 'Hello!'
      },
      {
        project: 'Test!'
      },
      {
        project: 'Wow!'
      }
    ];
    let wrapper = shallow(<ProjectNav projects={projects} />);
    wrapper.setState({ input: 'Bird' });
    wrapper.instance().createNew = jest.fn().mockImplementation(() => 5);

    let returned = wrapper.instance().checkUnique();
    expect(returned).toEqual(5);
  });
});
