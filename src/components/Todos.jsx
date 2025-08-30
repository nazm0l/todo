import { useContext, useState } from "react";
import { Plus } from "lucide-react";
import AddTodoModal from "./AddTodoModal";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

function Todos() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(TodoContext);

  const { todos, searchTerm, filter } = state;
  console.log(state);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const handleEdit = (id, title) => {
    dispatch({ type: "EDIT", payload: { id, title } });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesFilter;

    if (filter === "all") {
      matchesFilter = true;
    } else if (state.filter === "active") {
      matchesFilter = todo.status === "active";
    } else {
      matchesFilter = todo.status === "completed";
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="py-6">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">Tasks</h2>
          <button
            className="flex justify-center items-center gap-4 bg-[#15803D] py-2 lg:py-4 px-4 lg:px-7 rounded-lg text-xl font-semibold text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Plus />
            Add Task
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {state.todos.length > 0 ? (
          filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleToggle={handleToggle}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            No tasks available. Please add a task.
          </p>
        )}
      </div>
      <AddTodoModal isOpen={isOpen} setIsOpen={setIsOpen} dispatch={dispatch} />
    </>
  );
}

export default Todos;
