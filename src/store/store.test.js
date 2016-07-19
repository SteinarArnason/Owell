import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', () => {
  it('should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // act

    // assert
    expect(store).toEqual(store);
  });
});
