import React from "react";
import "./language.css";
import { defaultCodeC } from "../../shared/default";
import { defaultCodeJava } from "../../shared/default";
import { defaultCodePy } from "../../shared/default";
import { defaultCodeGo } from "../../shared/default";
import { choiceToText } from "./choiceToText";
const Language = (props) => {
  const langChange = (newVal) => {
    newVal = newVal.target.className;
    console.log(newVal);
    props.changeLanguage(newVal);
    props.socket.emit("sendLang", newVal, () => console.log("Language Sent"));
    if (newVal === "1") {
      props.mode("c_cpp");
      props.code(defaultCodeC);
      props.socket.emit("sendCode", defaultCodeC, () =>
        console.log("Code Sent")
      );
      props.socket.emit("sendMode", "c_cpp", () => console.log("Mode Sent"));
    } else if (newVal === "2") {
      props.mode("python");
      props.code(defaultCodePy);
      props.socket.emit("sendCode", defaultCodePy, () =>
        console.log("Code Sent")
      );
      props.socket.emit("sendMode", "python", () => console.log("Mode Sent"));
    } else if (newVal === "3") {
      props.mode("java");
      props.code(defaultCodeJava);
      props.socket.emit("sendCode", defaultCodeJava, () =>
        console.log("Mode Sent")
      );
      props.socket.emit("sendMode", "java", () => console.log("Mode Sent"));
    } else if (newVal === "4") {
      props.mode("go");
      props.code(defaultCodeGo);
      props.socket.emit("sendCode", defaultCodeGo, () =>
        console.log("Mode Sent")
      );
      props.socket.emit("sendMode", "go", () => console.log("Mode Sent"));
    }
    props.changeVisi(!props.visi);
  };
  const dropMenu = () => {
    console.log(props.visi);
    props.changeVisi(!props.visi);
  };
  const content = (
    <>
      <div id="language" onClick={dropMenu}>
        <div id="nameOfLang">{choiceToText[props.language]}</div>
      </div>
      <div
        id="dropMenu"
        style={{ visibility: props.visi ? "hidden" : "visible" }}
      >
        <div id="options" className="1" onClick={langChange}>
          C++
        </div>
        <div id="options" className="2" onClick={langChange}>
          Python
        </div>
        <div id="options" className="3" onClick={langChange}>
          Java
        </div>
        <div id="options" className="4" onClick={langChange}>
          Go
        </div>
      </div>
    </>
  );
  return content;
};

export default Language;
