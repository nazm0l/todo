import { useReducer } from "react";
import { todosReducer } from "../utils/todosReducer";
import { TodoContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
