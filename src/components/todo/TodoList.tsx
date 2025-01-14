import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodoContext";

const TodoList = () => {
  const todos = useTodos();

  return (
    <ul>
      {todos!.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
