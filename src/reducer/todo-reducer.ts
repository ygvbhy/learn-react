import { Todo, TodoAction } from "../types";

export default function todoReducer(todos: Todo[], action: TodoAction) {
  switch (action.type) {
    case "added": {
      const { newTodo } = action;
      return [...todos, newTodo];
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      return [
        ...todos.slice(0, insertAt),
        { id: nextId, text: todoText, done: false },
        ...todos.slice(insertAt),
      ];
    }
    case "deleted": {
      const { id } = action;
      return todos.filter((todo) => todo.id !== id);
    }
    case "done": {
      const { id, done } = action;
      return todos.map((todo) => (todo.id === id ? { ...todo, done } : todo));
    }
    case "reversed": {
      return todos.toReversed();
    }
    default: {
      throw Error("알 수 없는 액션 타입입니다.");
    }
  }
}
