import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodoContext";
import { useCallback, useMemo, useState } from "react";

const TodoList = () => {
  const todos = useTodos();
  const [isDone, setIsDone] = useState(false);

  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    }

    return todos?.filter((todo) => todo.done);
  };

  const filteredTodos = getFilteredTodos();

  const getStatsCount = useCallback(() => {
    const totalCount = todos?.length;
    const doneCount = todos?.filter((todo) => todo.done).length;

    return {
      totalCount,
      doneCount,
    };
  }, [todos]);

  const { totalCount, doneCount } = useMemo(
    () => getStatsCount(),
    [getStatsCount]
  );

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="isDone"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
        />
        <label htmlFor="isDone">
          완료된 항목 보기({`${doneCount}/${totalCount}`})
        </label>
      </div>
      <ul>
        {filteredTodos!.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
