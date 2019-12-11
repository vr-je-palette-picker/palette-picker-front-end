import React from 'react';
import { shallow } from 'enzyme';
import PaletteForm from './PaletteForm';

describe('PaletteForm', () => {
  let wrapper;
  let projects = [{}, {}, {}];
  let close = jest.fn();
  let newPalette = jest.fn();
  let findProjectByName = jest.fn();

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
});
