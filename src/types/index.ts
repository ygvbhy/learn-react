export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  isFavorite: boolean;
  link?: string;
}

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type TodoAction =
  | { type: "added"; newTodo: Todo }
  | { type: "added_index"; insertAt: number; nextId: number; todoText: string }
  | { type: "deleted"; id: number }
  | { type: "done"; id: number; done: boolean }
  | { type: "reversed" };
