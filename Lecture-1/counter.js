import React from 'react';
import './App.css';
import { ButtonsBox } from './ButtonsBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  changeCounter = (changeBy) => {
    this.setState((state, props) => ({
      counter: state.counter + changeBy
    }));
  }

  render() {
    return (
      <div>
        <ButtonsBox isBoxVisible={true} changeCounter={this.changeCounter} />
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
