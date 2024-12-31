import { Todo } from "../../types";

const TodoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
}: {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number, done: boolean) => void;
}) => {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) => onToggleTodo(item.id, e.target.checked)}
          />
          <span>{item.done ? <del>{item.text}</del> : item.text}</span>
          <button onClick={() => onDeleteTodo(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
