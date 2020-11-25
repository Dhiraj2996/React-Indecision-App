import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.handleOkay}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2 className="modal__title">Selected Option</h2>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button onClick={props.handleOkay} className="button">
      Okay
    </button>
  </Modal>
);
export default OptionModal;
