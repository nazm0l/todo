import { Calendar, SquarePen, Trash2 } from "lucide-react";
import { formatDate } from "../utils/formateDate";
import { useState } from "react";

function Todo({ id, todo, handleDelete, handleEdit, handleToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const { title, description, date } = todo;

  const formattedDate = formatDate(date);

  return (
    <>
      <div className="grid grid-cols-12 items-center bg-white px-10 py-7 shadow-[0px_5px_10px_0px_rgba(0,_0,_0,_0.25)] rounded-lg">
        <div className="grid col-span-1">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={todo.status === "completed"}
            className="appearance-none w-10 h-10 mx-auto border-2 border-gray-300 rounded-sm bg-white
              checked:border-green-500 checked:bg-no-repeat checked:bg-center checked:bg-green-300 cursor-pointer"
            onChange={() => handleToggle(id)}
          />
        </div>
        <div className="col-span-6">
          <h2 className="text-xl font-medium">
            {isEditing ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={() => {
                  handleEdit(id, newTitle);
                  setIsEditing(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEdit(id, newTitle);
                    setIsEditing(false);
                  }
                }}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                autoFocus
              />
            ) : (
              <span>{title}</span>
            )}
          </h2>
          <p className="text-[#94A3B8] text-xs mt-1">{description}</p>
        </div>
        <div className="flex justify-center gap-3 col-span-3 text-[#A1A1AA]">
          <Calendar />
          <p>{formattedDate}</p>
        </div>
        <div className="col-span-2 flex justify-end gap-5 text-[#A1A1AA]">
          <SquarePen
            className="w-6 h-6 cursor-pointer hover:text-[#15803D] transition"
            onClick={() => setIsEditing(true)}
          />
          <Trash2
            className="w-6 h-6 cursor-pointer hover:text-red-300 transition"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </>
  );
}

export default Todo;
