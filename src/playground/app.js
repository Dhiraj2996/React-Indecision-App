const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Header_Title",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do
      </button>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleRemoveOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      <p>
        {props.optionsArray.length == 0 && "Please add a option to get started"}
      </p>
      <ol>
        {props.optionsArray.map((x) => (
          <Option
            key={x}
            optionText={x}
            handleRemoveOption={props.handleRemoveOption}
          />
        ))}
      </ol>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const inputComponent = e.target.elements.optionText;
    const value = inputComponent.value.trim();

    const error = this.props.handleAddOption(value);
    console.log(error);

    this.setState(() => {
      return { error };
    });
    if (!error) {
      inputComponent.value = "";
    }
    inputComponent.focus();
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="optionText" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      optionsArray: [],
    };
  }
  componentDidMount() {
    let arrayString = localStorage.getItem("options");
    let parsedArray;
    try {
      let arrayString = localStorage.getItem("options");
      let parsedArray = JSON.parse(arrayString);
      if (parsedArray) {
        this.setState(() => ({
          optionsArray: parsedArray,
        }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.optionsArray.length !== this.state.optionsArray.length) {
      localStorage.setItem("options", JSON.stringify(this.state.optionsArray));
    }
  }

  handleDeleteAllOptions() {
    this.setState(() => ({ optionsArray: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      optionsArray: prevState.optionsArray.filter(
        (option) => option !== optionToRemove
      ),
    }));
  }

  handlePick() {
    const randomNum = Math.floor(
      Math.random() * this.state.optionsArray.length
    );
    const option = this.state.optionsArray[randomNum];
    alert(option);
  }
  handleAddOption(newOption) {
    if (!newOption) {
      return "Enter valid value to add Item";
    } else if (this.state.optionsArray.indexOf(newOption) > -1) {
      return "This Option Already Exists";
    }
    this.setState((prevState) => ({
      optionsArray: prevState.optionsArray.concat([newOption]),
    }));
    return "";
  }
  render() {
    return (
      <div>
        <Header
          title="Indecision"
          subtitle="Put your life in hands of a computer"
        />
        <Action
          hasOptions={this.state.optionsArray.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          optionsArray={this.state.optionsArray}
          handleRemoveAll={this.handleDeleteAllOptions}
          handleRemoveOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
