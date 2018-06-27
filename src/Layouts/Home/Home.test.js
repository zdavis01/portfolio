import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home should render the landing page', () => {
  it('should contain a div', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div').exists()).toEqual(true);
  })
})
