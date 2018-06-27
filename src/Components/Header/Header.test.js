import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
// import { Link } from 'react-router-dom';

describe('Header should render a div with with a home link titled Portfolio', ()=> {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Header />);
  });

  it('should contain a div', ()=> {
    expect(wrapper.find('div').exists()).toEqual(true);
  });

  it('should contain a Link', ()=> {
    expect(wrapper.find('Link').exists()).toEqual(true);
  });
});
