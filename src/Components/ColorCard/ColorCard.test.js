import React from 'react';
import { shallow } from 'enzyme';
import ColorCard from './ColorCard';

describe('ColorCard', () => {
  let wrapper;
  let locked = false;
  let toggleLock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ColorCard locked={locked} toggleLock={toggleLock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when locked is true', () => {
    locked = true;
    wrapper = shallow(<ColorCard locked={locked} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleLock onClick', () => {
    wrapper.find('.ColorCard__lock--icon').simulate('click');
    expect(toggleLock).toHaveBeenCalled();
  });

  it('should call toggleLock onClick', () => {
    locked = true;
    wrapper = shallow(<ColorCard locked={locked} toggleLock={toggleLock} />);
    wrapper.find('.ColorCard__lock--icon').simulate('click');
    expect(toggleLock).toHaveBeenCalled();
  });
});
