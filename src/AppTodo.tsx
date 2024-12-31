import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";

const AppTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "JavaScript 공부하기", done: false },
  ]);

  const handleTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    const nextId = todos.length;
    const newTodo = { id: nextId, text: todoText, done: false };
    setTodos([...todos, newTodo]);
    setTodoText(""); // null, undefined 동작 안함
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number, done: boolean) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done } : todo)));
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <input
        type="text"
        value={todoText}
        onChange={handleTodoTextChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo}>추가</button>
      <div>preview: {todoText}</div>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
};

export default AppTodo;
