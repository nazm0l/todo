import "./App.css";
import Header from "./components/Header";
import HeaderStats from "./components/HeaderStats";
import Todos from "./components/Todos";

function App() {
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
