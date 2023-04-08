import "./App.css";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="todo--app">
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
