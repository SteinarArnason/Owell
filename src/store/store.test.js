import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', function() {
  it('should handle creating courses', function() {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    //act

    //assert
    expect(true).toEqual(true);
  });
});
