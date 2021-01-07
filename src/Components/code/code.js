import React from "react";
import AceEditor from "react-ace";
import "./code.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools";

const Code = (props) => {
  var handleChange = (newVal) => {
    props.changeCode(newVal);
  };

  const content = (
    <AceEditor
      mode={props.mode}
      width="50%"
      height="92vh"
      value={props.code}
      theme="cobalt"
      fontSize={props.fontSize}
      showPrintMargin={false}
      onChange={handleChange}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  );
  return content;
};

export default Code;
