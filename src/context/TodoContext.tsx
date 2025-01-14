import { createContext, useContext } from "react";
import { Todo, TodoAction } from "../types";
import { useImmerReducer } from "use-immer";
import todoReducer from "../reducer/todo-reducer";

export const TodoContext = createContext<Todo[] | null>(null); // todo
export const TodoDispatchContext =
  createContext<React.Dispatch<TodoAction> | null>(null); // dispatch

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "JavaScript 공부하기", done: false },
  ]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
