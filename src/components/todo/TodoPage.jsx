import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import * as todoActions from 'actions/todoActions';

class TodoPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isDone: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      headerString: 'TODO PAGE',
    };

    this.onSubmit = ::this.onSubmit;
  }

  onSubmit(event) {
    const text = event.target.value;
    if (event.which === 13 && text.length > 0) {
      this.props.actions.addTodo(text);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>{ this.state.headerString }</h1>
        <p>{ 'A list of stuff to be done' }</p>
        <br />
        <input
          type="text"
          placeholder="Add todo"
          onKeyDown={ this.onSubmit } />
        <TodoList todos={ this.props.todos } />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => { //eslint-disable-line
  const todoState = state.get('todo');

  const dummyTodos = [
    { id: 0, isDone: true, text: 'make components' },
    { id: 1, isDone: false, text: 'design actions' },
    { id: 2, isDone: false, text: 'TDD implement reducers' },
    { id: 3, isDone: false, text: 'connect components' },
  ];

  return {
    todos: todoState.get('todos').toJS() || dummyTodos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
