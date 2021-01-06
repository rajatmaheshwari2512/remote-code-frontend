import React from 'react';
import AceEditor from "react-ace";
import "./output.css";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Output = props =>{
    const erase = () =>{
        props.changeRes("")
    }
    const content = (
        <div id='output'>
            <div id='closeDiv'>
                <div>Output</div>
                <Button variant="outline-danger" onClick={erase}>Clear</Button>
            </div>
            <AceEditor
              mode="text"
              theme="monokai"
              name="code-results"
              value={props.result}
              showPrintMargin={false}
              showGutter={false}
              highlightActiveLine={false}
              readOnly={true}
              editorProps={{ $blockScrolling: true }}
              width="100%"
              height="100%"
            />
        </div>
    );
    return content;
}

export default Output;