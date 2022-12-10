import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import uuid from "react-uuid";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    dispatch(addTodo({ id: uuid(), name: text }));

    setText("");
  };

  return (
    <div className="addPost">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 bg-slate-600 rounded-lg border-gray-600 focus:outline-none"
          type="text"
          placeholder="+タスクを追加"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
    </div>
  );
};

export default AddTodo;
