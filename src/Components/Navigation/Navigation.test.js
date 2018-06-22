import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation renders a menu with items that take a user to different pages', () => {
  it('should print a list containing "About, Work and Contact"', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('ul').childAt(0).text()).toEqual('About');
    expect(wrapper.find('ul').childAt(1).text()).toEqual('Work');
    expect(wrapper.find('ul').childAt(2).text()).toEqual('Contact');
  });
});
