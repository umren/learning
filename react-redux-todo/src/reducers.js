import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter((todo, index) => {
        index != action.payload;
      });
    default:
      return state;
  }
}
