import React from "react";
import "./input.css";
const Input = (props) => {
  //State

  var inputChange = (newVal) => {
    props.changeInput(newVal.target.value);
    props.socket.emit("sendInput", newVal.target.value, () =>
      console.log("Input sent")
    );
  };

  const content = (
    <div id="input">
      <div className="inputName">&nbsp;Custom Input</div>
      <textarea
        className="input"
        name="input"
        onChange={inputChange}
        value={props.input}
      ></textarea>
    </div>
  );
  return content;
};

export default Input;
