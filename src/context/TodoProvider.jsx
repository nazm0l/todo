import { useReducer } from "react";
import { todosReducer } from "../utils/todosReducer";
import { TodoContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
    searchTerm: "",
    filter: "all",
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
