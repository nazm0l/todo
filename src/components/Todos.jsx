import { useState } from "react";
import { Plus } from "lucide-react";
import AddTodoModal from "./AddTodoModal";
import Todo from "./Todo";

function Todos() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="py-6">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">Tasks</h2>
          <button
            className="flex justify-center items-center gap-4 bg-[#15803D] py-4 px-7 rounded-lg text-xl font-semibold text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Plus />
            Add Task
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Todo />
      </div>

      <AddTodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Todos;
