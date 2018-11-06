import React, { Component } from "react";

export default class TodoListInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key == "Enter" && e.target.value !== "") {
      console.log("Adding todo item!");
      this.props.addTodoItem(this.state.text);
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="What need's to be done?"
        onChange={this.handleInput}
        onKeyPress={this.handleKeyPress}
        value={this.state.text}
      />
    );
  }
}
