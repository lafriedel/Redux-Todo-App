import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

class ToDoForm extends Component {
render() {
    return (
        <form>
            <input type="text" />
            <button>Add task</button>
        </form>
    )
}
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { addToDo })(ToDoForm);