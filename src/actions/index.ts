import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

// Async action creator, use redux-thunk to control when action
// is dispatched to reducers. Only dispatch after response is received
// Define action type we will dispatch
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  };
};
