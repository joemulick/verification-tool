import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import codeReducer from './codeReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  code: codeReducer
});