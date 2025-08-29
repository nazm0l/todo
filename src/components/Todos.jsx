import { useContext, useState } from "react";
import { Plus } from "lucide-react";
import AddTodoModal from "./AddTodoModal";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

function Todos() {
  const [isOpen, setIsOpen] = useState(false);
  const { todos, dispatch } = useContext(TodoContext);
  console.log(todos);
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
        {todos.length > 0 ? (
          todos.map((todo, index) => <Todo key={index} todo={todo} />)
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
