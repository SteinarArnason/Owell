import React from 'react';

import styles from './Todo.css';

const Todo = (item) => {
  const { todo } = item;

  if (todo.isDone) {
    return <strike className="cursorPointer">{ todo.text }</strike>;
  }

  return <div className="cursorPointer">{ todo.text }</div>;
};

export default Todo;
