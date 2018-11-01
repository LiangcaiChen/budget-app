import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editExpense, removeExpense} from '../actions/expenses';
import ExpenseForm from "./ExpenseForm";

class EditExpensePage extends Component {
    render() {

        return (
            <div>
                <h1>Edit your expense:</h1>
                <ExpenseForm
                    expense={this.props.expenses}
                    onSubmit={(expense)=>{
                        this.props.dispatch(editExpense(this.props.expenses.id, expense));
                        this.props.history.push('/');
                    }}
                />
                <button onClick={()=>{
                    const id = this.props.expenses.id;
                    this.props.dispatch(removeExpense({id}));
                    this.props.history.push('/');
                }}>Remove</button>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expenses: state.expenses.find((expense)=> expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);