import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './styles/base/_basee.scss';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpanses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description:'Water bill', amount: 4500}));
store.dispatch(addExpense({description:'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description:'Rent', amount: 109500}));

const state = store.getState();
const visibleExpanses = getVisibleExpanses(state.expenses, state.filters);
console.log(visibleExpanses);

const jsx = (
   <Provider store={store}>
        <AppRouter />
   </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

