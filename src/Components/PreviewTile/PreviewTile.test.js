import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import PreviewTile from './PreviewTile';

const props = {
  'to': 'someWebsite',
  'src': 'imageSource',
  'alt': 'cat',
}

describe('Preview Tile renders an image which links to a project page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PreviewTile { ... props} />);
  });

  it('should contain a Link', () => {
    expect(wrapper.find('Link').exists()).toEqual(true);
  });

  it('should contain an image', () => {
    expect(wrapper.find('img').exists()).toEqual(true);
  });
});
