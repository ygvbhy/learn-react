import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import todoReducer from "./reducer/todo-reducer";

const AppTodo = () => {
  const [todoText, setTodoText] = useState("");
  // const [todos, setTodos] = useState();
  const [todos, dispatch] = useReducer(todoReducer, [
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
    dispatch({ type: "added", newTodo });
    setTodoText(""); // null, undefined 동작 안함
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: "deleted", id });
  };

  const handleToggleTodo = (id: number, done: boolean) => {
    dispatch({ type: "done", id, done });
  };

  const handleInsertTodo = () => {
    const nextId = todos.length;
    dispatch({ type: "added_index", insertAt, nextId, todoText });
    setTodoText("");
  };

  const handleReverseTodo = () => {
    dispatch({ type: "reversed" });
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
