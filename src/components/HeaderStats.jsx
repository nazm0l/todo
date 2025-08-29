import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function HeaderStats() {
  const { state } = useContext(TodoContext);

  const totalTodos = state.todos.length;
  const activeTodos = state.todos.filter(
    (todo) => todo.status === "active"
  ).length;
  const completedTodos = totalTodos - activeTodos;

  return (
    <>
      <div className="mt-5 lg:mt-20 bg-white drop-shadow-lg rounded-lg h-[56px] px-4 lg:px-14 py-4">
        <div className="flex justify-between items-center">
          <p>All : {totalTodos}</p>
          <p>Active : {activeTodos}</p>
          <p>Completed : {completedTodos}</p>
        </div>
      </div>
    </>
  );
}

export default HeaderStats;
