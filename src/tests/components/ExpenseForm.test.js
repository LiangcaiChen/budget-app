import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import '../setupTests';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJson(wrapper)).toMatchSnapshot();
});