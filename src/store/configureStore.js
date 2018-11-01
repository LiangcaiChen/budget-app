import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default () => {
    return createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        })
    );
};

