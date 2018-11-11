import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';
import '../setupTests';
import toJson from 'enzyme-to-json';

test('should render NotFoundPage correnctly', ()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});