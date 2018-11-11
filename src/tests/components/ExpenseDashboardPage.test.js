import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';
import '../setupTests';
import toJson from 'enzyme-to-json';

test('should render ExpenseDashboardPage correnctly', ()=>{
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});