import React, { Component } from "react";
import styled from "styled-components";

export default class TodoListItem extends Component {
  render() {
    let el;

    if (this.props.completed) {
      return (
        <ContainerLineThrought>
          <Button
            data-key={this.props["data-key"]}
            onClick={this.props.toggleTodoItem}
          >
            V
          </Button>
          {this.props.value}{" "}
          <button
            data-key={this.props["data-key"]}
            onClick={this.props.removeTodoItem}
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
            onClick={this.props.toggleTodoItem}
          >
            V
          </Button>
          {this.props.value}{" "}
          <button
            data-key={this.props["data-key"]}
            onClick={this.props.removeTodoItem}
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
