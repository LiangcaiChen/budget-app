import React, {Component} from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';

class ExpenseDashboardPage extends Component {
    render() {
        return (
            <div>
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        )
    }
}

export default ExpenseDashboardPage;