import Immutable from 'immutable';

import reducer from './todoReducer';
import * as actions from 'actions/todoActions';

const initialState = Immutable.fromJS({
  todos: [
    { id: 0, isDone: true, text: 'make components' },
    { id: 1, isDone: false, text: 'design actions' },
    { id: 2, isDone: false, text: 'TDD implement reducers' },
    { id: 3, isDone: false, text: 'connect components' },
  ],
});

describe('todoReducer', () => {

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
    const todos = Immutable.fromJS({ id: 10, isDone: false, text: 'npm run start' });
    expect(newState.get('todos').count())
      .toEqual(5);
    expect(newState.get('todos').last())
      .toEqual(todos);
  });

  describe('toggleTodo()', () => {

    it('should toggle the isDone field where {id: 0} in the list to false', () => {
      // arrange
      const action = actions.toggleTodo(initialState.get('todos').first().get('id'));
      const expectedOutcome = [
        { id: 0, isDone: false, text: 'make components' },
        { id: 1, isDone: false, text: 'design actions' },
        { id: 2, isDone: false, text: 'TDD implement reducers' },
        { id: 3, isDone: false, text: 'connect components' },
      ];

      // act
      const newState = reducer(initialState, action);

      // assert
      expect(newState.get('todos').toJS())
        .toEqual(expectedOutcome);
    });

    it('should toggle the isDone field where {id: 1} in the list to true', () => {
      // arrange
      const action = actions.toggleTodo(initialState.get('todos').get(1).get('id'));
      const expectedOutcome = [
        { id: 0, isDone: true, text: 'make components' },
        { id: 1, isDone: true, text: 'design actions' },
        { id: 2, isDone: false, text: 'TDD implement reducers' },
        { id: 3, isDone: false, text: 'connect components' },
      ];

      // act
      const newState = reducer(initialState, action);

      // assert
      expect(newState.get('todos').toJS())
        .toEqual(expectedOutcome);
    });

    it('should not change anything when trying to update an item that does not exist', () => {
      // arrange
      const action = actions.toggleTodo(9000);
      const expectedOutcome = [
        { id: 0, isDone: true, text: 'make components' },
        { id: 1, isDone: false, text: 'design actions' },
        { id: 2, isDone: false, text: 'TDD implement reducers' },
        { id: 3, isDone: false, text: 'connect components' },
      ];

      // act
      const newState = reducer(initialState, action);

      // assert
      expect(newState.get('todos').toJS())
        .toEqual(expectedOutcome);
    });

  });

});
