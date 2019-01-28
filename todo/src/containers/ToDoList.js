import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';

import ToDo from '../components/ToDo';

const ToDoList = props => {
    console.log(props.todos);
    return (
       <div>
           {props.todos.map(todo => <ToDo key={todo.id} todo={todo} /> )}
       </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDoList);