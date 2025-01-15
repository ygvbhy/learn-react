import { useState } from "react";
import { useTodoDispatch, useTodos } from "../../context/TodoContext";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useTodoDispatch();
  const todos = useTodos();

  const handleAddTodo = (text: string) => {
    const nextId = todos!.length;
    const newTodo = { id: nextId, text, done: false };
    dispatch!({ type: "added", newTodo });
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" && !e.nativeEvent.isComposing) {
            handleAddTodo(e.currentTarget.value);
            setTodoText("");
          }
        }}
      />
      <button
        onClick={() => {
          handleAddTodo(todoText);
          setTodoText("");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddTodo;
