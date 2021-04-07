// Use .ts as filename instead of .tsx as we do not
// need to have any JSX in this file

import { combineReducers } from 'redux';

export const reducers = combineReducers({
  counter: () => 1,
});
