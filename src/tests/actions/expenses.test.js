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

test('should add expense action by default', ()=> {

});

// export const addExpense = ({ description = '', note='', amount=0, createdAt=0 } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid4(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

test('should setup edit expense action object', () => {
    const action = editExpense(4, {description:"hot tea"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: 4,
        updates: {description:"hot tea"}
    });
});


