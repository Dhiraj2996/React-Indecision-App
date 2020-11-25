import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={props.handleRemoveAll} className="button button--link">
          Remove All
        </button>
      </div>

      {props.optionsArray.length == 0 && (
        <p className="widget-message">"Please add a option to get started"</p>
      )}

      <ol>
        {props.optionsArray.map((x,index) => (
          <Option
            key={x}
            optionText={x}
            handleRemoveOption={props.handleRemoveOption}
            count={index+1}
          />
        ))}
      </ol>
    </div>
  );
};
export default Options;
