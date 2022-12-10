import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos.value);
  return (
    <div>
      <ul className="mt-4">
        {(todos || []).map((todo: any) => (
          <div
            className="rounded-lg border border-gray-500 mb-1 w-full"
            key={todo.id}
          >
            <li className="flex justify-between items-center p-2">
              <div>
                <input type="checkbox" className="accent-gray-500 w-4 h-4" />
                <label className="pl-2 text-lg">{todo.name}</label>
              </div>
              <div>
                <button className="pr-2 text-lg">↓</button>
              </div>
            </li>
            <div className="border-t border-gray-500 p-3">
              <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
                削除
                {/* <svg
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg> */}
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
