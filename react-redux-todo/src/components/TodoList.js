import React, { Component } from "react";
import styled from "styled-components";
import TodoListInput from "./TodoListInput";
import TodoListItem from "./TodoListItem";
import Counter from "./Counter";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.removeTodoItem = this.removeTodoItem.bind(this);
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
  }

  // toggle if item completed or not
  toggleTodoItem(event) {
    let key = event.target.dataset.key;
    this.props.dispatch(toggleTodo(key));
  }

  // remove todo item
  removeTodoItem(event) {
    let key = event.target.dataset.key;
    this.props.dispatch(removeTodo(key));
  }

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
            toggleTodoItem={this.toggleTodoItem}
            removeTodoItem={this.removeTodoItem}
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
