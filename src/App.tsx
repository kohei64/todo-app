import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TotalTime from "./components/TotalTime";

function App() {

  return (
    <div className="m-3">
      <Title />
      <TotalTime />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;