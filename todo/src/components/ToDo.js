import React from "react";

const ToDo = props => {
    
  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    props.deleteToDo(id);
  };

  return (
    <div>
      <p>{props.todo.task}</p>
      <button onClick={e => handleDelete(e, props.todo.id)}>Delete</button>
    </div>
  );
};

export default ToDo;
