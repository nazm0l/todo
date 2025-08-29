import "./App.css";
import Header from "./components/Header";
import HeaderStats from "./components/HeaderStats";

function App() {
  return (
    <>
      <section className="container mx-auto p-4">
        <HeaderStats />
        <Header />
      </section>
    </>
  );
}

export default App;
