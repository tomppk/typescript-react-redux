import { Todo, FetchTodosAction, ActionTypes } from '../actions';

// First argument the type of state with default value of empty array
// Second argument the dispatched action from action creator
// Use switch statement to cover different cases of actions the reducer
// might receive.
// If action type is ActionTypes.fetchTodos then return that actions payload
// If no match then return previous state by default
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
