import React, { PureComponent, PropTypes } from 'react';

import Todo from './Todo';

export default class TodoList extends PureComponent {

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isDone: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    toggle: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul>
        { this.props.todos.map((t) => {
          return (
            <li
              key={ t.id }
              onClick={ () => { this.props.toggle(t.id); } } >
              <Todo todo={ t } />
            </li>
          );
        }) }
      </ul>
    );
  }
}
