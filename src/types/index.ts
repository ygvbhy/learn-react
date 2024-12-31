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
