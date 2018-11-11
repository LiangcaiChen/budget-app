import React from  'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import toJson from 'enzyme-to-json';
import '../setupTests';

test('should render expenseListItem', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)

    expect(toJson(wrapper)).toMatchSnapshot();
});