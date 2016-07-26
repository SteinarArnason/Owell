import { combineReducers } from 'redux-immutablejs';

import todo from './todoReducer';
import car from './carReducer';

export default combineReducers({
  todo,
  car,
});
