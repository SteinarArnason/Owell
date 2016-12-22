import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import * as todoActions from 'actions/todoActions';

import defaultStyles from 'global.css';

// This component is exported so that it can be tested with jest/enzyme
export class TodoPage extends Component {

  // What we expect the component to have access to. This is then
  // bound together with the component in the mapStateToProps() and
  // mapDispatchToProps() functions to the recieved props (this.props)
  // .isRequired is an optional flag that shouldn't always be used
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

    // Component specific variables/settings, something that is unique
    // to this component and doesn't need to be in the store
    this.state = {
      headerString: 'TODO PAGE',
    };

    // Performing binds in the constructor are reccomended to imporive
    // performance on renders.
    // This version of binding is experimental (::this.functionName).
    // The current standard way would be (this.functionName.bind(this))
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
      <div className={ defaultStyles.pageContent }>
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

// The 'state' recieved here is the store state for the whole application.
// ownProps are other options/things ¯\_(ツ)_/¯ (e.g. params from the url)
export const mapStateToProps = (state, ownProps) => { //eslint-disable-line
  const todoState = state.get('todo');

  return {
    todos: todoState.get('todos').toJS() || [],
  };
};

// Maps the actions from first parameter to this.props.actions.actionName
export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
