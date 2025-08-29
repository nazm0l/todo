import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderStats from "./components/HeaderStats";
import Todos from "./components/Todos";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      savedTodos.forEach((todo) => {
        dispatch({ type: "ADD", payload: todo });
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <>
      <section className="container mx-auto p-4">
        <HeaderStats />
        <Header />
        <Todos />
      </section>
    </>
  );
}

export default App;
