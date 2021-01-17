import React from "react";
import "./header.css";

const Header = (props) => {
  const sizeChng = (newVal) => {
    props.changeFontSize(newVal.target.innerText);
    props.socket.emit("sendFont", newVal.target.innerText, () =>
      console.log("Font Sent")
    );
    props.changeVisi(!props.visi);
  };
  const dropMenu = () => {
    console.log(props.visi);
    props.changeVisi(!props.visi);
  };

  const content = (
    <div id="header">
      <div id="fontSize" onClick={dropMenu}>
        {props.fontSize}
      </div>
      <div
        id="dropMenu2"
        style={{ visibility: props.visi ? "hidden" : "visible" }}
      >
        <div onClick={sizeChng}>14px</div>
        <div onClick={sizeChng}>15px</div>
        <div onClick={sizeChng}>16px</div>
        <div onClick={sizeChng}>17px</div>
        <div onClick={sizeChng}>18px</div>
        <div onClick={sizeChng}>19px</div>
        <div onClick={sizeChng}>20px</div>
      </div>
    </div>
  );
  return content;
};

export default Header;
