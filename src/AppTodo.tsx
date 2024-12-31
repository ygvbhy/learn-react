import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";

const AppTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "JavaScript 공부하기", done: false },
  ]);
  const [insertAt, setInsertAt] = useState(todos.length - 1);

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

  const handleInsertTodo = () => {
    const nextId = todos.length;
    const newTodos = [
      ...todos.slice(0, insertAt),
      { id: nextId, text: todoText, done: false },
      ...todos.slice(insertAt),
    ];
    setTodos(newTodos);
    setTodoText("");
  };

  const handleReverseTodo = () => {
    // setTodos([...todos].reverse()); // 원본 배열 변경으로 인해 복사본 생성 후 리버스
    setTodos(todos.toReversed()); // 원본 배열 변경 되지 않고 새로운 배열을 반환 하므로 바로 리버스 가능
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select
          name=""
          id=""
          value={insertAt}
          onChange={(e) => setInsertAt(Number(e.target.value))}
        >
          {todos.map((item, index) => (
            <option value={index} key={item.id}>
              {index} 번째
            </option>
          ))}
        </select>
        <button onClick={handleInsertTodo}>추가</button>
      </div>
      <div>preview: {todoText}</div>
      <button onClick={handleReverseTodo}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
};

export default AppTodo;
