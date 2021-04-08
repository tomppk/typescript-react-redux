import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ActionTypes } from './types';

// Define interface that type Todo must satisfy
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Interface to describe action object that will be
// dispatched.
// This will be used as type for dispatch to make sure
// we will always pass in the correct type for dispatch
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

// Payload will be id of todo we want to delete
export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

// Define root url
const url = 'https://jsonplaceholder.typicode.com/todos';

// Async action creator, use redux-thunk to control when action
// is dispatched to reducers. Only dispatch after response is received
// Add type to axios.get so Typescript knows we expect to get back
// an array of Todos
// Define action type we will dispatch
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

// Action creator to delete todos
// Id of Todo we want to delete. Returns an object
// action of type DeleteTodoAction
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
