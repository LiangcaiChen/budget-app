import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';

class AddExpensePage extends Component {
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm />
            </div>
        )
    }
}

const mapStateToMap = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToMap)(AddExpensePage);