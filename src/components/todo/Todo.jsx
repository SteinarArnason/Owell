import React from 'react';

import styles from './Todo.css';

const Todo = (item) => {
  const { todo } = item;

  if (todo.isDone) {
    return <strike className={ styles.cursorPointer }>{ todo.text }</strike>;
  }

  return <div className={ styles.cursorPointer }>{ todo.text }</div>;
};

export default Todo;
