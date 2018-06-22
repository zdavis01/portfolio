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
    expect(wrapper.find(Header).exists());
  });

  it('should render a navigation component', () => {
    expect(wrapper.find(Navigation).exists());
  });
})
