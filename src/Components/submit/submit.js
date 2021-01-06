import React from 'react';
import "./submit.css"
import axios from 'axios';

const Submit = props =>{
    const handleRun = (e) =>{
        e.preventDefault();
        const data = JSON.stringify({
          code: props.code,
          language: props.language
        });
        axios.post("http://localhost:4000/code",data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=>{
          props.changeRes(res.data.result)
        })
        .catch((err)=>console.log(err))
      }

    const content = (
        <button id='submit' onClick={handleRun}>RUN CODE</button>
    );

    return content;
}

export default Submit;