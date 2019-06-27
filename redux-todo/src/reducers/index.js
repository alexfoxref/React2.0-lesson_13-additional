import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import inputReducer from './inputReducer';

export default combineReducers({
  todosReducer,
  inputReducer
})