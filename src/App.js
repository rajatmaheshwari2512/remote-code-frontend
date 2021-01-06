import React ,{ useState } from 'react';
import './App.css';
import Code from "./Components/code/code"
import Input from "./Components/input/input";
import Output from "./Components/output/output";
import Language from "./Components/language/language";
import Submit from "./Components/submit/submit";


const App = props =>{
  const [code,changeCode] = useState('');
  const [mode,changeMode] = useState('c_cpp');
  const [language,changeLanguage] = useState('c++');
  const [input,changeInput] = useState("");
  const [result, changeRes] = useState('');

  const content = (
    <div id='main'>
      <Code mode={mode} changeCode={changeCode}/>
      <Input changeInput={changeInput} input={input}/>
      <Output result={result} changeRes={changeRes}/>
      <Language mode={changeMode} changeLanguage={changeLanguage}/>
      <Submit code={code} language={language} changeRes={changeRes} />
    </div>
  );
  return content;
}

export default App;
