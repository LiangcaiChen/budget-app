import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import '../setupTests';

test('should render header correnctly', ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});