import React, { PropTypes } from 'react';

import Todo from './Todo';

const TodoList = ({ todos, toggle }) => {
  return (
    <ul>
      { todos.map((t) => {
        return (
          <li
            key={ t.id }
            onClick={ () => { toggle(t.id); } } >
            <Todo todo={ t } />
          </li>
        );
      }) }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isDone: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggle: PropTypes.func.isRequired,
};

export default TodoList;
