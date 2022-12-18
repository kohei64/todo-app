import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todoSlice";
import Date from "./Date";

import Timer from "./Timer";

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
            <div className="border-t border-gray-500 p-3 flex">
              <Timer />
              <Date />
              <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
                削除
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
