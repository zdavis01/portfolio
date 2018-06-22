import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer should render a white div with the words "Zach Davis 2018" inside it', () => {
  it('should contain a div', ()=> {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find('div').text()).toEqual(' ZACH DAVIS 2018 ');
  })
})
