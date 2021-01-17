import React, { useState } from "react";
import "./submit.css";
import fetch from "cross-fetch";
import env from "react-dotenv";

const Submit = (props) => {
  const [click, setClick] = useState(false);
  const handleRun = (e) => {
    e.preventDefault();
    setClick(true);
    fetch(env.FETCH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: props.code,
        input: props.input,
        langid: props.language,
      }),
    })
      .then((resp) => resp.json())
      .then((result) => {
        setClick(false);
        console.log(result);
        if (result.stdout) {
          props.changeRes(result.stdout);
          props.socket.emit("sendOutput", result.stdout, () =>
            console.log("Output Sent")
          );
        } else if (result.stderr) {
          props.changeRes(result.stderr);
          props.socket.emit("sendOutput", result.stderr, () =>
            console.log("Output Sent")
          );
        } else {
          props.changeRes("No Output");
          props.socket.emit("sendOutput", "No Output", () =>
            console.log("Output Sent")
          );
        }
      })
      .catch((err) => {
        setClick(false);
        props.changeRes("Something went Wrong");
        console.log(err);
      });
  };

  const content = (
    <button disabled={click} id="submit" onClick={handleRun}>
      RUN CODE
    </button>
  );

  return content;
};

export default Submit;
