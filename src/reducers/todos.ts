import { Todo, Action, ActionTypes } from '../actions';

// First argument the type of state with default value of empty array
// Second argument the dispatched action from action creator
// Use type Action to contain all our different types of
// actions
// Use switch statement to cover different cases of actions the reducer
// might receive.
// If action type is ActionTypes.fetchTodos then return that actions payload
// If type is ActionTypes.deleteTodo we return a new state array of Todos
// by filtering our previous state object or array of Todos and for each Todo
// if the todo.id is not equal to id in action.payload that todo is added to
// new state. If the id is the one we want to delete then that todo is excluded
// If no match then return previous state by default
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
