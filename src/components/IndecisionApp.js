import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    optionsArray: [],
    selectedOption: undefined,
  };

  handleDeleteAllOptions = () => {
    this.setState(() => ({ optionsArray: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      optionsArray: prevState.optionsArray.filter(
        (option) => option !== optionToRemove
      ),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(
      Math.random() * this.state.optionsArray.length
    );
    const option = this.state.optionsArray[randomNum];
    // alert(option);
    this.setState({ selectedOption: option });
  };
  handleClearSelectedOption = () => {
    this.setState({ selectedOption: undefined });
  };
  handleAddOption = (newOption) => {
    if (!newOption) {
      return "Enter valid value to add Item";
    } else if (this.state.optionsArray.indexOf(newOption) > -1) {
      return "This Option Already Exists";
    }
    this.setState((prevState) => ({
      optionsArray: prevState.optionsArray.concat([newOption]),
    }));
    return "";
  };
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

  render() {
    return (
      <div>
        <Header
          title="Indecision"
          subtitle="Put your life in hands of a computer"
        />
        <div className="container ">
          <Action
            hasOptions={this.state.optionsArray.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              optionsArray={this.state.optionsArray}
              handleRemoveAll={this.handleDeleteAllOptions}
              handleRemoveOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleOkay={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
