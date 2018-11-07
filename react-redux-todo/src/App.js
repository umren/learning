import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./reducers";

const store = createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
