import constants from '../constants';

export function addTodo(todo) {
  return { type: constants.TODO.ADD, todo };
}

export function toggleTodo(id) {
  return { type: constants.TODO.TOGGLE, id };
}
