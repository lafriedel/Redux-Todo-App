import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
import { Form, Button, Input, FormGroup } from 'reactstrap';

class ToDoForm extends Component {
  state = {
    inputText: ""
  };

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleFormChange}
          placeholder="Add a task"
          name="inputText"
          value={this.state.inputText}
          type="text"
        />
        <Button>Add task</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addToDo }
)(ToDoForm);
