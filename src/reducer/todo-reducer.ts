import { Todo, TodoAction } from "../types";

export default function todoReducer(draft: Todo[], action: TodoAction) {
  switch (action.type) {
    case "added": {
      const { newTodo } = action;
      draft.push(newTodo);
      break;
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false });
      break;
    }
    case "deleted": {
      const { id } = action;
      // draft
      return draft.filter((todo) => todo.id !== id);
    }
    case "done": {
      const { id, done } = action;
      return draft.map((todo) => (todo.id === id ? { ...todo, done } : todo));
    }
    case "reversed": {
      return draft.toReversed();
    }
    default: {
      throw Error("알 수 없는 액션 타입입니다.");
    }
  }
}
