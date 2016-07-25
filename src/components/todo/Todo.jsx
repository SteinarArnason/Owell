import React from 'react';

const Todo = (item) => {
  const { todo } = item;

  if (todo.isDone) {
    return <strike>{ todo.text }</strike>;
  }

  return <div>{ todo.text }</div>;
};

export default Todo;
