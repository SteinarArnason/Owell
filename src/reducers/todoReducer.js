import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';

// Any imports not from node_modules have to be done relative to current path
// so that unit tests run correctly
import constants from '../constants';

let nextId = 10;

const initialState = Immutable.fromJS({
  todos: [],
});

export default createReducer(initialState, {

  [constants.TODO.ADD]: (state, { todo }) => {
    const newTodo = Immutable.fromJS({
      id: nextId++,
      isDone: false,
      text: todo,
    });
    state = state.set('todos', state.get('todos').push(newTodo));
    return state;
  }

});
