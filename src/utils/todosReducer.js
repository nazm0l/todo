export function todosReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? {
                ...todo,
                status: todo.status === "active" ? "completed" : "active",
              }
            : todo
        ),
      };

    case "EDIT":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };

    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload.id),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((t) => t.status !== "completed"),
      };

    case "SET_SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}
