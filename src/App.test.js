import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a header component', () => {
    expect(wrapper.find('Header').exists()).toEqual(true);
  });

  it('should render a navigation component', () => {
      expect(wrapper.find('Navigation').exists()).toEqual(true);
  });

  it('should render a Main component', () => {
    expect(wrapper.find('Main').exists()).toEqual(true);
  })

  it('should contain a Footer component', () => {
    expect(wrapper.find('Footer').exists()).toEqual(true);
  })
})
