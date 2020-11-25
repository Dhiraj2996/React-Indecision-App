import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleSubmit = (e) => {
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
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form onSubmit={this.handleSubmit} className="add-option">
          <input type="text" name="optionText" className="add-option__input" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
