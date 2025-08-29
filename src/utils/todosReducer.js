export function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [...todos, action.payload];
    case "TOGGLE":
      return todos.map((todo, index) => {
        if (index === action.payload.id) {
          return {
            ...todo,
            status: todo.status === "active" ? "completed" : "active",
          };
        }
        return todo;
      });
    case "EDIT":
      return todos.map((todo, index) => {
        if (index === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    case "DELETE":
      return todos.filter((t, i) => i !== action.payload.id);
    case "CLEAR_COMPLETED":
      return todos.filter((t) => t.status !== "completed");
    default:
      return todos;
  }
}
