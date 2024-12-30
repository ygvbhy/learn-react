import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";

const AppTodo = () => {
  const [todos, setTodos] = useState([
    { id: 0, label: "HTML&CSS 공부하기" },
    { id: 1, label: "JavaScript 공부하기" },
  ]);

  return (
    <div>
      <h2>할 일 목록</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default AppTodo;
