import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup add expense action object', ()=> {
    const ob = {
        description: "coffee",
        note: "hot coffee",
        amount: "5.5",
        createdAt: 1000
    };

    const action = addExpense(ob);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...ob,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action by default', ()=> {
    expect(addExpense()).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense(4, {description:"hot tea"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: 4,
        updates: {description:"hot tea"}
    });
});

// toBe example:
// const add = (a,b) => a + b;
//
// test('should add two numbers', () => {
//     expect(add(3,4)).toBe(7);
// });


