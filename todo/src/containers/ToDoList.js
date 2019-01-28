import React from "react";
import { connect } from "react-redux";
import { toggleCompleted } from "../actions";

import ToDo from "../components/ToDo";

const ToDoList = props => {

    const handleToggle = (e, id) => {
        e.preventDefault();
        props.toggleCompleted(id)
    }
  console.log(props.todos);
  return (
    <div>
      {props.todos.map(todo => (
        <div key={todo.id} onClick={e => handleToggle(e, todo.id)}>
          <ToDo todo={todo} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(ToDoList);
