import React from 'react';
import { connect } from 'react-redux';

import ToDo from '../components/ToDo';

const ToDoList = props => {
    console.log(props);
    return (
       <div>
           {props.todos.map(todo => <ToDo todo={todo} /> )}
       </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(ToDoList);