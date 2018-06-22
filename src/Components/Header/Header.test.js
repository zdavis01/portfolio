import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header should render a div with the word "PORTFOLIO" in it', ()=> {
  it('should contain a div', ()=> {
    const wrapper= shallow(<Header/>);
    expect(wrapper.find('div').text()).toEqual('PORTFOLIO');
  })
})
