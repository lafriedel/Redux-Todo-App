import React from "react";
import { Button } from 'reactstrap';

const ToDo = props => {
    
  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    props.deleteToDo(id);
  };

  return (
    <div className={`to-do ${props.todo.completed}`}>
      <h2>{props.todo.task}</h2>
      <Button color="danger" onClick={e => handleDelete(e, props.todo.id)}>Delete</Button>
    </div>
  );
};

export default ToDo;
