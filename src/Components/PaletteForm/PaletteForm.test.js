import React from 'react';
import { shallow } from 'enzyme';
import PaletteForm from './PaletteForm';
import { fetchProjects } from '../../utils/apiCalls/apiCalls';

jest.mock('../../utils/apiCalls/apiCalls.js');

describe('PaletteForm', () => {
  let wrapper;
  let projects = [
    {
      project: '1',
      id: 1
    },
    {
      project: '2',
      id: 2
    },
    {
      project: '3',
      id: 3
    }
  ];
  let close = jest.fn();
  let newPalette = jest.fn();
  let findProjectByName = jest.fn();
  const mockEvent = {
    target: {
      name: 'paletteName',
      value: 'Times Square'
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <PaletteForm
        projects={projects}
        close={close}
        newPalette={newPalette}
        findProjectByName={findProjectByName}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state onChange of input', () => {
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual({
      paletteName: 'Times Square',
      project: ''
    });
  });

  it('should generate select options for each project name in state', () => {
    let options = wrapper.instance().createSelectOptions();

    expect(options.length).toEqual(3);
  });

  it('should call fetchProjects when createNewPalette is invoked', () => {
    fetchProjects.mockImplementation(() => {
      return Promise.resolve(projects);
    });
    wrapper.instance().createNewPalette();
    expect(fetchProjects).toHaveBeenCalled();
  });

  it('should call cancelNewPalette when createNewPalette is invoked', () => {
    wrapper.instance().cancelNewPalette = jest.fn();
    wrapper.instance().createNewPalette();

    expect(wrapper.instance().cancelNewPalette).toHaveBeenCalled();
  });
});
