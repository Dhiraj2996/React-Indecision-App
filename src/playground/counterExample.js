// let count = 0;
// const addOne = () => {
//   count++;
//   renderMyApp();
// };
// const minusOne = () => {
//   count--;
//   renderMyApp();
// };
// const resetFunc = () => {
//   count = 0;
//   renderMyApp();
// };

// const renderMyApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetFunc}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderMyApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetFunc = this.resetFunc.bind(this);
  }
  
  addOne() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  resetFunc() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetFunc}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
