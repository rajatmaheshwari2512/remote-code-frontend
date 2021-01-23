import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import env from "react-dotenv";
import { Offline } from "react-detect-offline";

import "./editor.css";
import Code from "../code/code";
import Input from "../input/input";
import Output from "../output/output";
import Header from "../header/header";
import Language from "../language/language";
import Submit from "../submit/submit";
import { defaultCodeC } from "../../shared/default";
import io from "socket.io-client";
import queryString from "query-string";

const ENDPOINT = env.ENDPOINT;

let socket;
toast.configure();

const App = ({ location }) => {
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    socket.emit("disconnect");
  });
  const history = useHistory();
  const [code, changeCode] = useState(defaultCodeC);
  const [mode, changeMode] = useState("c_cpp");
  const [language, changeLanguage] = useState("1");
  const [input, changeInput] = useState("");
  const [result, changeRes] = useState("");
  const [fontSize, changeFontSize] = useState("17px");
  const [visi, changeVisi] = useState(true);
  const [langVisi, changeLangVisi] = useState(true);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  function goHome() {
    toast.error("Your internet has been lost, please login again");
    history.push("/");
  }

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        history.push("/");
        return toast.error(error);
      }
    });
    console.log(name, room);
    console.log(ENDPOINT);
    setRoom(room);
    setName(name);
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("disMess", (message) => {
      toast.warning(message.text);
    });
    socket.on("welcomeMessage", (message) => {
      toast.success(message.text);
    });
    socket.on("code", (message) => {
      changeCode(message.text);
    });
    socket.on("input", (message) => {
      changeInput(message.text);
    });
    socket.on("output", (message) => {
      changeRes(message.text);
    });
    socket.on("font", (message) => {
      changeFontSize(message.text);
    });
    socket.on("mode", (message) => {
      changeMode(message.text);
    });
    socket.on("lang", (message) => {
      console.log(language);
      changeLanguage(message.text);
    });
  }, []);

  const content = (
    <div id="main">
      <Code
        mode={mode}
        changeCode={changeCode}
        code={code}
        fontSize={fontSize}
        socket={socket}
      />
      <Input changeInput={changeInput} input={input} socket={socket} />
      <Output result={result} changeRes={changeRes} />
      <Header
        fontSize={fontSize}
        changeFontSize={changeFontSize}
        visi={visi}
        changeVisi={changeVisi}
        socket={socket}
      />
      <Language
        changeVisi={changeLangVisi}
        visi={langVisi}
        language={language}
        mode={changeMode}
        changeLanguage={changeLanguage}
        code={changeCode}
        socket={socket}
      />
      <Submit
        code={code}
        language={language}
        input={input}
        changeRes={changeRes}
        socket={socket}
      />
      <Offline onChange={goHome}></Offline>
    </div>
  );
  return content;
};

export default App;
