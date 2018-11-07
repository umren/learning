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

    this.addTodoItem = this.addTodoItem.bind(this);
    this.removeTodoItem = this.removeTodoItem.bind(this);
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
  }

  // add new item from input component
  addTodoItem(newItem) {
    this.props.dispatch(addTodo(newItem));
  }

  // toggle if item completed or not
  toggleTodoItem(event) {
    let itemIndex = event.target.dataset.key;
    this.props.dispatch(toggleTodo(itemIndex));
  }

  // remove todo item
  removeTodoItem(event) {
    let removeItemIndex = event.target.dataset.key;
    this.props.dispatch(removeTodo(removeItemIndex));
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <TodoListInput addTodoItem={this.addTodoItem} />
        {this.props.todoList.map((todo, index) => (
          <TodoListItem
            key={index}
            data-key={index}
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
