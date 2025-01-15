import { Todo } from "../../types";
import { useTodoDispatch } from "../../context/TodoContext";
import { memo } from "react";

const TodoItem = memo(({ item }: { item: Todo }) => {
  console.log("🔥 TodoItem 렌더링");
  TodoItem.displayName = "TodoItem";
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
});

export default TodoItem;
