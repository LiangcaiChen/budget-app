import React, {Component} from 'react';

class EditExpensePage extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                Edit the expense with id of {this.props.match.params.id}
            </div>
        )
    }
}

export default EditExpensePage;