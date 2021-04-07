import React from 'react';
import ReactDOM from 'react-dom';

// Describes all the props and their structure that you expect
// to pass as into your component
interface AppProps {
  color?: string;
}

// Define App component.
// Reference AppProps interface as React.Component generic type
// This way Typescript knows the props that are going to be passed
// to component
class App extends React.Component<AppProps> {
  // Define state property as object
  state = { counter: 0 };

  // Define methods as arrow functions to bind 'this' to
  // this instance of App class
  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
