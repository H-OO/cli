import { combineReducers } from 'redux';

import test from './testReducer';
import T1 from './T1Reducer';

export default combineReducers({
  test,
  T1
});
