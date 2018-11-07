import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoListInput extends Component {
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
      this.props.dispatch(addTodo(this.state.text));
      this.setState({ text: "" });
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

export default connect()(TodoListInput);
