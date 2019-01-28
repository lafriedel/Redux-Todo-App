import React, { Component } from "react";
import ToDoForm from "./containers/ToDoForm";
import ToDoList from "./containers/ToDoList";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
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
          <Col>
            <ToDoForm />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <ToDoList />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default App;
