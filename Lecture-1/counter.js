class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  changeCounter = (changeBy) => {
    console.log(changeBy)
    this.setState((state, props) => ({
      counter: state.counter + changeBy
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeCounter(1)}>+</button>
        <button onClick={() => this.changeCounter(-1)}>-</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}
