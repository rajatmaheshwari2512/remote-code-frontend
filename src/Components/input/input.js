import React from 'react';
import "./input.css"
const Input = props =>{
    //State

    var inputChange = (newVal) =>{
        props.changeInput(newVal.target.value)
    }


    const content =(
        <div id="input">Custom Input
              <textarea className='input' name='input' onChange={inputChange} value={props.input}></textarea>        
          </div>
    );
    return content;
}

export default Input;