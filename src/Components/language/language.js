import React from "react";
import "./language.css";
import { defaultCodeC } from "../../shared/default";
import { defaultCodeJava } from "../../shared/default";
import { defaultCodePy } from "../../shared/default";
const Language = (props) => {
  const langChange = (newVal) => {
    newVal = newVal.target.value;
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
    }
  };

  const content = (
    <select id="language" name="language" onChange={langChange}>
      <option value="1">C++</option>
      <option value="2">Python</option>
      <option value="3">Java</option>
    </select>
  );
  return content;
};

export default Language;
