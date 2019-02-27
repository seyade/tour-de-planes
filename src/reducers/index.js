import { combineReducers } from 'redux';
import planesReducer from './planesReducer';

export default combineReducers({
  planes: planesReducer,
});
