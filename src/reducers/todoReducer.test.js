import expect from 'expect';
import Immutable from 'immutable';

// Any imports not from node_modules have to be done relative to current path
// so that unit tests run correctly
import reducer from './todoReducer';
import * as actions from '../actions/todoActions';

const initialState = Immutable.fromJS({
  todos: [
    { id: 0, isDone: true, text: 'make components' },
    { id: 1, isDone: false, text: 'design actions' },
    { id: 2, isDone: false, text: 'TDD implement reducers' },
    { id: 3, isDone: false, text: 'connect components' },
  ],
});

describe('todoReducer', () => {

  it('Placeholder test', () => {
    // arrange

    // act

    // assert
    expect(true).toEqual(true);
  });

  it('should initially have 4 entries in the array', () => {
    // arrange
    const initialTodoReducerState = reducer(initialState);

    // act

    // assert
    expect(initialTodoReducerState.get('todos').count())
      .toEqual(4);
    expect(initialTodoReducerState.get('todos').toJS())
      .toEqual(initialState.get('todos').toJS());
  });

  it('should add a todo to our list of todos', () => {
    // arrange
    const newTodo = 'npm run start';
    const action = actions.addTodo(newTodo);

    // act
    const newState = reducer(initialState, action);

    // assert
    const todos5 = Immutable.fromJS({ id: 10, isDone: false, text: 'npm run start' });
    expect(newState.get('todos').count())
      .toEqual(5);
    expect(newState.get('todos').last())
      .toEqual(todos5);
  });
});
