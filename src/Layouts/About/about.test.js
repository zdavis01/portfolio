import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe(' renders a component containing the about section of this site', () => {
  it('should contain a div with text', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('div').exists()).toEqual(true);
  })
})
