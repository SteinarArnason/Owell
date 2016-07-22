import constants from '../constants';

export function addTodo(todo) {
  return { type: constants.TODO.ADD, todo };
}
