import React from 'react';

import Todo from './Todo';

const TodoList = (list) => {
  const { todos } = list;

  return (
    <ul>
      { todos.map((t) => {
        return (
          <li key={ t.id }>
            <Todo todo={ t } />
          </li>
        );
      }) }
    </ul>
  );
};

export default TodoList;
