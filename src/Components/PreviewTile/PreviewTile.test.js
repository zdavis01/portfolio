import React from 'react';
import { shallow } from 'enzyme';
import PreviewTile from './PreviewTile';

describe('Preview Tile renders a div that contains an image or thumbnail of work', () => {
  it('should render a div', () => {
    const wrapper = shallow(<PreviewTile />);
    expect(wrapper.find('div').text()).toEqual('');
  })
})
