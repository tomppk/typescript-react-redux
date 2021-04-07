import React from 'react';

export class App extends React.Component {
  render() {
    return <div>Hi there</div>;
  }
}

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
