import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact should render a div with contact information', () => {
  it('should contain a div', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('div').exists()).toEqual(true);
  })
})
