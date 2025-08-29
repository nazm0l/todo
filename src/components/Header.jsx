import { useContext } from "react";
import logo from "../assets/logo.svg";
import { TodoContext } from "../context/TodoContext";

function Header() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <>
      <div className="mt-6 bg-white drop-shadow-lg rounded-lg lg:h-[150px] px-2 lg:px-10 py-6 lg:py-12">
        <div className="flex justify-between gap-3">
          <div>
            <img src={logo} alt="logo" width={58} height={50} />
          </div>
          <div className="flex gap-6">
            <div className="w-full lg:w-[650px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute top-3 left-3"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search tasks..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded py-4 px-12 text-[#94A3B8] font-semibold text-xs focus:text-black"
                value={state.searchTerm || ""}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SEARCH",
                    payload: e.target.value,
                  })
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => dispatch({ type: "SET_SEARCH", payload: "" })}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
            <div className="w-full lg:w-[180px] relative">
              <select
                name="todoSelect"
                id=""
                className="w-full appearance-none border py-3 px-6 rounded border-[#E2E8F0] "
                value={state.filter}
                onChange={(e) =>
                  dispatch({
                    type: "SET_FILTER",
                    payload: e.target.value,
                  })
                }
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute top-3 right-3"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16 10-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
