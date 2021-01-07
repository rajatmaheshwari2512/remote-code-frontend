import React from "react";
import "./language.css";
import { defaultCodeC } from "../../shared/default";
import { defaultCodeJava } from "../../shared/default";
import { defaultCodePy } from "../../shared/default";
const Language = (props) => {
  const langChange = (newVal) => {
    newVal = newVal.target.value;
    props.changeLanguage(newVal);
    if (newVal === "1") {
      props.mode("c_cpp");
      props.code(defaultCodeC);
    } else if (newVal === "2") {
      props.mode("python");
      props.code(defaultCodePy);
    } else if (newVal === "3") {
      props.mode("java");
      props.code(defaultCodeJava);
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
