import { Todo } from "../../types";
import { useTodoDispatch } from "../../context/TodoContext";

const TodoItem = ({ item }: { item: Todo }) => {
  const dispatch = useTodoDispatch();

  const handleDeleteTodo = (id: number) => {
    dispatch!({ type: "deleted", id });
  };

  const handleToggleTodo = (id: number, done: boolean) => {
    dispatch!({ type: "done", id, done });
  };

  return (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => handleToggleTodo(item.id, e.target.checked)}
      />
      <span>{item.done ? <del>{item.text}</del> : item.text}</span>
      <button onClick={() => handleDeleteTodo(item.id)}>X</button>
    </>
  );
};

export default TodoItem;
