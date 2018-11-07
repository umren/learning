import React, { Component } from "react";
import styled from "styled-components";
import TodoListInput from "./TodoListInput";
import TodoListItem from "./TodoListItem";
import Counter from "./Counter";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <Container>
        <TodoListInput />
        {this.props.todoList.map(todo => (
          <TodoListItem
            key={todo.id}
            data-key={todo.id}
            value={todo.text}
            completed={todo.completed}
          />
        ))}
        <Counter counter={this.props.todoList.length} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 188px;
  margin: 100px auto 0 auto;
`;

function mapStateToProps(state) {
  return {
    todoList: state
  };
}

export default connect(mapStateToProps)(TodoList);
