import React, { Component } from "react";
import ToDoForm from "./containers/ToDoForm";
import ToDoList from "./containers/ToDoList";
import { Container, Row, Col } from "reactstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
            <Container>
        <Row>
          <Col />
          <Col>
            <h1>Today's To-Dos</h1>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col sm="10">
            <ToDoForm />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col sm="10">
            <ToDoList />
          </Col>
          <Col />
        </Row>
      </Container>
      </div>

    );
  }
}

export default App;
