import React, { PureComponent, PropTypes } from 'react';

import styles from './Todo.css';

export default class Todo extends PureComponent {

  static propTypes = {
    todo: PropTypes.object.isRequired,
  }

  render() {
    const todo = this.props.todo.isDone
      ? <strike className={ styles.cursorPointer }>{ this.props.todo.text }</strike>
      : <div className={ styles.cursorPointer }>{ this.props.todo.text }</div>;
    return (
      todo
    );
  }
}
