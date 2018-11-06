import React, { Component } from "react";
import styled from "styled-components";
import TodoListInput from "./TodoListInput";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };

    this.addTodoItem = this.addTodoItem.bind(this);
  }

  // add new item from input component
  addTodoItem(newItem) {
    this.state.todoList.push(newItem);
    this.setState({ todoList: this.state.todoList });
  }

  render() {
    return (
      <Container>
        <TodoListInput addTodoItem={this.addTodoItem} />
        {this.state.todoList.map(todo => (
          <TodoListItem value={todo} />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100px;
  margin: 100px auto 0 auto;
`;
