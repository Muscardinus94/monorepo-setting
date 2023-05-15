'use client';

import useTodoStore from '@/stores/todo/store';

import { Button } from '@packages/ui/src/stories/Button';

export const TodoList = () => {
  const { todo, addTodo } = useTodoStore();

  console.log(todo);

  return (
    <div>
      TodoList
      <Button
        label="Add Todo"
        primary
        onClick={() => {
          addTodo('cxvxcv');
        }}
      />
    </div>
  );
};
