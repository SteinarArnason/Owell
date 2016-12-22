import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'immutable';
import _ from 'lodash';

import { TodoPage, mapStateToProps, mapDispatchToProps } from './TodoPage';
import * as todoActions from 'actions/todoActions';

const setupStateToProps = (todos) => {
  const state = Immutable.fromJS({
    todo: {
      todos
    },
  });

  return mapStateToProps(state);
};

const setup = (todos) => {
  const props = {
    actions: todoActions || {},
    todos: todos || [],
  };

  return shallow(<TodoPage { ...props } />);
};

describe('TodoPage component', () => {

  describe('TodoPage connect', () => {

    it('map State To Props', () => {
      // arrange
      const todos = [
        { id: 0, isDone: true, text: 'make components' },
        { id: 1, isDone: false, text: 'design actions' },
        { id: 2, isDone: false, text: 'TDD implement reducers' },
        { id: 3, isDone: false, text: 'connect components' },
      ];

      // act
      const props = setupStateToProps(todos);

      // assert
      expect(props.todos.length).toEqual(4);
    });

    it('map Dispatch To Props', () => {
      // arrange
      const dispatchSpy = jest.fn();

      // act
      const { actions } = mapDispatchToProps(dispatchSpy);

      // assert
      expect(_.size(actions)).toEqual(2);
      expect(actions.addTodo).toBeDefined();
      expect(actions.toggleTodo).toBeDefined();
    });

  });

  it('should have an h1 and input', () => {
    // arrange
    const component = setup();

    // assert
    expect(component.find('h1').text()).toEqual('TODO PAGE');
    expect(component.find('input').props().placeholder).toEqual('Add todo');
  });

  describe('onSubmit()', () => {

    it('should submit a todo when Enter is pressed and input has some text', () => {
      // arrange
      let component = setup();
      component.instance().props.actions.addTodo = jest.fn();
      const keyDownEvent = {
        which: 13,
        target: {
          value: 'hello world',
        },
      };

      // act
      component.find('input').simulate('keyDown', keyDownEvent);

      // assert
      expect(keyDownEvent.target.value).toEqual('');
      expect(component.instance().props.actions.addTodo).toHaveBeenCalled();
    });

    it('should not do anything Enter is pressed and input is empty', () => {
      // arrange
      let component = setup();
      component.instance().props.actions.addTodo = jest.fn();
      const keyDownEvent = {
        which: 13,
        target: {
          value: '',
        },
      };

      // act
      component.find('input').simulate('keyDown', keyDownEvent);

      // assert
      expect(keyDownEvent.target.value).toEqual('');
      expect(component.instance().props.actions.addTodo).not.toHaveBeenCalled();
    });

  });

  describe('toggleTodo()', () => {

    it('should call the toggleTodo action', () => {
      // arrange
      let component = setup();
      component.instance().props.actions.toggleTodo = jest.fn();

      // act
      component.instance().toggleTodo(1);

      // assert
      expect(component.instance().props.actions.toggleTodo).toHaveBeenCalled();
    });

  });

});
