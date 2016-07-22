import expect from 'expect';
import Immutable from 'immutable';
import * as actions from '../actions/todoActions';
import reducer from './todoReducer';

const initialState = Immutable.fromJS({
  todos: [
    { id: 0, isDone: true, text: 'make components' },
    { id: 1, isDone: false, text: 'design actions' },
    { id: 2, isDone: false, text: 'TDD implement reducers' },
    { id: 3, isDone: false, text: 'connect components' },
  ],
});

describe('todoReducer', () => {

  it('should be the first passing test in the todoReducer', () => {
    // arrange

    // act

    // assert
    expect(true).toEqual(true);
  });

  it('should add a todo to our list of todos', () => {
    // arrange
    const newTodo = 'npm run start';
    const action = actions.addTodo(newTodo);

    // act
    const newState = reducer(initialState, action);

    // assert
    expect(newState.get('todos').count()).toEqual(5);
  });
});
