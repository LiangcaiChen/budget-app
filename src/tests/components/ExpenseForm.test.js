import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import '../setupTests';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import moment from 'moment';

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

test('should set description on input change', ()=>{
    const value = 'New description';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(0).simulate('change', {
       target: {value}
   });
   expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', ()=>{
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change with valid number', ()=>{
    const value = '3.2';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount on input change with invalid number', ()=>{
    const value = '-343141341';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit props for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        note:expenses[0].note,
        amount:expenses[0].amount,
        createdAt:expenses[0].createdAt
    });
});

// onDateChange = (createdAt) => {
//     if(createdAt) {
//         this.setState(()=>({createdAt}));
//     }
// };
test('should set new date on date change', ()=> {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar foucus on change', ()=> {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});