import React from 'React';
import { shallow } from 'enzyme';
import Project from './Project';

const projectProps = {
  "src": "someImageURL",
  "alt": "someAlternativeText",
  "title": "Project X",
  "body": "BodyComponent",
}

describe('Project should render a content shell', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project { ... projectProps }/>);
  });


  it('should contain a div', () => {
    expect(wrapper.find('div').exists()).toEqual(true);
  });

  it('should contain an h1 element', () => {
    expect(wrapper.find('h1').text()).toEqual('Project X');
  });

  it('should contain a paragraph of text', () => {
    expect(wrapper.find('p').text()).toEqual('BodyComponent');
  });


  it('should contain a cover image', () => {
    expect(wrapper.find('img').exists()).toEqual(true);
  });
});
