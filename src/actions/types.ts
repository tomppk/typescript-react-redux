import { FetchTodosAction, DeleteTodoAction } from './todos';

// Define action types we expect to use inside single
// enum file.
// Action type does not need to be string, just needs
// to be unique value
// If no value defined then by default it is 0, next one 1
// etc.
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

// Create a new type Action that is a type union of our
// possible different actions
// So can be either fetch or delete action
export type Action = FetchTodosAction | DeleteTodoAction;
