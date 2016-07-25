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
    this.toggleTodo = ::this.toggleTodo;
  }

  onSubmit(event) {
    const text = event.target.value;
    if (event.which === 13 && text.length > 0) {
      this.props.actions.addTodo(text);
      event.target.value = '';
    }
  }

  toggleTodo(listId) {
    this.props.actions.toggleTodo(listId);
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
        <TodoList
          todos={ this.props.todos }
          toggle={ this.toggleTodo } />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => { //eslint-disable-line
  const todoState = state.get('todo');

  return {
    todos: todoState.get('todos').toJS() || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
