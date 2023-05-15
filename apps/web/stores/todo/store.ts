import { create } from 'zustand';

type TodoState = {
  todo: string[];
  addTodo: (todo: string) => void;
};

const useTodoStore = create<TodoState>(set => ({
  todo: [],
  addTodo: todo => set(state => ({ ...state, todo: [...state.todo, todo] })),
}));

export default useTodoStore;
