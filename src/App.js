import React, { useState } from "react";
import "./App.css";
import Code from "./Components/code/code";
import Input from "./Components/input/input";
import Output from "./Components/output/output";
import Header from "./Components/header/header";
import Language from "./Components/language/language";
import Submit from "./Components/submit/submit";
import { defaultCodeC } from "./shared/default";

const App = (props) => {
  const [code, changeCode] = useState(defaultCodeC);
  const [mode, changeMode] = useState("c_cpp");
  const [language, changeLanguage] = useState("1");
  const [input, changeInput] = useState("");
  const [result, changeRes] = useState("");
  const [fontSize, changeFontSize] = useState("17px");
  const [visi, changeVisi] = useState(true);

  const content = (
    <div id="main">
      <Code
        mode={mode}
        changeCode={changeCode}
        code={code}
        fontSize={fontSize}
      />
      <Input changeInput={changeInput} input={input} />
      <Output result={result} changeRes={changeRes} />
      <Header
        fontSize={fontSize}
        changeFontSize={changeFontSize}
        visi={visi}
        changeVisi={changeVisi}
      />
      <Language
        mode={changeMode}
        changeLanguage={changeLanguage}
        code={changeCode}
      />
      <Submit
        code={code}
        language={language}
        input={input}
        changeRes={changeRes}
      />
    </div>
  );
  return content;
};

export default App;
