import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions";

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleToggleTodo(e) {
    let key = parseInt(e.target.dataset.key);
    this.props.dispatch(toggleTodo(key));
  }

  handleRemoveTodo(e) {
    let key = parseInt(e.target.dataset.key);
    this.props.dispatch(removeTodo(key));
  }

  render() {
    let el;

    if (this.props.completed) {
      return (
        <ContainerLineThrought>
          <Button
            data-key={this.props["data-key"]}
            onClick={this.handleToggleTodo}
          >
            V
          </Button>
          {this.props.value}{" "}
          <button
            data-key={this.props["data-key"]}
            onClick={this.handleRemoveTodo}
          >
            X
          </button>
        </ContainerLineThrought>
      );
    } else {
      return (
        <Container>
          <Button
            data-key={this.props["data-key"]}
            onClick={this.handleToggleTodo}
          >
            V
          </Button>
          {this.props.value}{" "}
          <button
            data-key={this.props["data-key"]}
            onClick={this.handleRemoveTodo}
          >
            X
          </button>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  padding: 15px 5px;
`;

const ContainerLineThrought = styled.div`
  padding: 15px 5px;
  text-decoration: line-through;
`;

const Button = styled.button`
  margin-right: 5px;
`;

export default connect()(TodoListItem);
