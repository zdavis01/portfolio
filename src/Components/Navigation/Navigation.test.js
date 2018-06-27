import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation should render a list of menu Links', () =>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should contain a list', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
  });

  it('should contain a Link', () => {
    expect(wrapper.find('Link').exists()).toEqual(true);
  })
});
