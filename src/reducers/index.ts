// Use .ts as filename instead of .tsx as we do not
// need to have any JSX in this file

import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// Interface to describe entire state inside our redux store
// A kind of model that describes the type of data that exists inside store
// So store state key todos: will be an array of Todos
export interface StoreState {
  todos: Todo[];
}
// Combine our reducers to add todos to our redux store state
// Pass in type to validate our reducers that they will return types defined
// in our StoreState interface
// StoreState type annotation causes Typescript to make sure that for
// property todos: function todosReducer will return an array of Todo[]
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
