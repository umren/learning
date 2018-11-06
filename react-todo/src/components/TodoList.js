import React, { Component } from "react";
import styled from "styled-components";
import TodoListInput from "./TodoListInput";
import TodoListItem from "./TodoListItem";
import Counter from "./Counter";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };

    this.addTodoItem = this.addTodoItem.bind(this);
    this.removeTodoItem = this.removeTodoItem.bind(this);
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
  }

  // add new item from input component
  addTodoItem(newItem) {
    this.state.todoList.push({ completed: false, text: newItem });
    this.setState({ todoList: this.state.todoList });
  }

  // remove todo item
  removeTodoItem(event) {
    let removeItemIndex = event.target.dataset.key;
    this.state.todoList.splice(removeItemIndex, 1);
    this.setState({ todoList: this.state.todoList });
  }

  // toggle if item completed or not
  toggleTodoItem(event) {
    let itemIndex = event.target.dataset.key;
    console.log(event.target.dataset);
    this.state.todoList[itemIndex].completed = !this.state.todoList[itemIndex]
      .completed;
    this.setState({ todoList: this.state.todoList });
  }

  render() {
    return (
      <Container>
        <TodoListInput addTodoItem={this.addTodoItem} />
        {this.state.todoList.map((todo, index) => (
          <TodoListItem
            key={index}
            data-key={index}
            value={todo.text}
            completed={todo.completed}
            toggleTodoItem={this.toggleTodoItem}
            removeTodoItem={this.removeTodoItem}
          />
        ))}
        <Counter counter={this.state.todoList.length} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 188px;
  margin: 100px auto 0 auto;
`;
