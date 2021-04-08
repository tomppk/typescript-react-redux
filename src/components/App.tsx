import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

// Define the props that App component is going to receive
// Add this type to React.Component<> so Typescript can check
// that received props are of correct type
interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

// underscore _App used only to separate the name from the connected App
// we want to export
class _App extends React.Component<AppProps> {
  // Use arrow function to bind 'this' to this instance of App component
  // Access this.props and call fetchTodos() to make axios request to fetch
  // and array of Todo[]
  // fetchTodos() received from redux state store through mapStateToProps and
  // connect()
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  // Return an array of JSX elements
  // Map over the todos array and for each todo return a div with
  // the key of todo.id and text of todo.title
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  // Reference this.renderList() function under button element
  // Before fetching a list of Todos this.props.todos is empty array
  // So nothing is rendered until button is clicked
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

// Map redux store state to props so our component has access to
// state stored inside redux store. Enter keys and values we want
// our component to access from store
// The type of state is our StoreState interface that describes the
// structure and data inside our store
// Return an object with key of todos with value of array of Todos
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

// We do not want to export _App but the connected version of App
// First set of parentheses for configuration
// Second set the component we want to connect redux store state to
// First argument is mapStateToProps function
// Second argument and object containing fetchTodos action creator
export const App = connect(mapStateToProps, { fetchTodos })(_App);

// Describes all the props and their structure that you expect
// to pass as into your component
// interface AppProps {
//     color?: string;
//   }

//   // // Describes the state of our properties we expect to have
//   // // interface AppState {
//   // //   counter: number;
//   // // }

//   // Functional component
//   // Takes in props of the type defined in AppProps interface
//   // Returns JSX.Element
//   // const App = (props: AppProps): JSX.Element => {
//   //   return <div>{props.color}</div>;
//   // };

//   // Define App component.
//   // Reference AppProps interface as React.Component generic type
//   // This way Typescript knows the props that are going to be passed
//   // to component
//   // Component<P, S> takes optionally two types
//   // First type is props, second type is state we expect to have
//   // Default types are empty objects P = {} and S = {}
//   // If use constructor to set this.state then it does not overwrite default
//   // And we need to give state interface as second type
//   // React.Component<AppProps, AppState>
//   class App extends React.Component<AppProps> {
//     // Define state property as object
//     // Overwrites default state property of empty object S = {}
//     // If use this then do not need to pass in second type of AppState into
//     // React.Component
//     state = { counter: 0 };

//     //   constructor(props: AppProps) {
//     //     super(props);

//     //     this.state = { counter: 0 };
//     //   }

//     // Define methods as arrow functions to bind 'this' to
//     // this instance of App class
//     onIncrement = (): void => {
//       this.setState({ counter: this.state.counter + 1 });
//     };

//     onDecrement = (): void => {
//       this.setState({ counter: this.state.counter - 1 });
//     };

//     render() {
//       return (
//         <div>
//           <button onClick={this.onIncrement}>Increment</button>
//           <button onClick={this.onDecrement}>Decrement</button>
//           {this.state.counter}
//         </div>
//       );
//     }
//   }
