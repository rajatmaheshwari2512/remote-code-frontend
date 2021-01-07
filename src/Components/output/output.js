import React from "react";
import AceEditor from "react-ace";
import "./output.css";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Output = (props) => {
  const erase = () => {
    props.changeRes("");
  };
  const content = (
    <div id="output">
      <div id="closeDiv">
        <div>&nbsp;Output</div>
        <Button variant="success" id="clear" onClick={erase}>
          &nbsp;Clear&nbsp;
        </Button>
      </div>
      <AceEditor
        mode="text"
        theme="cobalt"
        name="code-results"
        fontSize="20"
        value={props.result}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={false}
        readOnly={true}
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="100%"
        style={
          props.result === "No Result"
            ? { fontStyle: "italic" }
            : { fontWeight: "normal" }
        }
      />
    </div>
  );
  return content;
};

export default Output;
