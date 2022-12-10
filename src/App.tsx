import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="m-3">
      <Title />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;