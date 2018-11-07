import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

let todoId = 0;

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: todoId++,
          text: action.payload,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}
