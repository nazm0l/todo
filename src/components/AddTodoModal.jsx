import { CircleX } from "lucide-react";

function AddTodoModal({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 transition-all duration-500 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 blur-sm bg-white/75 bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="relative max-w-[600px] w-full bg-white shadow-lg rounded-lg p-10 transition-all duration-500">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Task Details</h2>
            <CircleX
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <form className="mt-4">
            <label htmlFor="task">Title</label>
            <input
              type="text"
              name="title"
              id="task"
              className="w-full py-3 px-2.5 border border-[#A1A1AA] rounded mb-3"
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full py-3 px-2.5 border border-[#A1A1AA] rounded mb-3"
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="w-full py-3 px-2.5 border border-[#A1A1AA] rounded"
            ></textarea>
            <div className="flex gap-5 justify-end mt-4">
              <button
                className="border border-black text-black py-2 px-6 rounded-lg text-xs cursor-pointer"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-[#15803D] py-2 px-6 rounded-lg text-xs text-white cursor-pointer"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodoModal;
