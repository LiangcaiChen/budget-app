import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import '../setupTests';
import toJson from 'enzyme-to-json';

test('should render header correnctly', ()=>{
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
});