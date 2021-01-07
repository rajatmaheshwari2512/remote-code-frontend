import React from 'react';
import "./input.css"
const Input = props =>{
    //State

    var inputChange = (newVal) =>{
        props.changeInput(newVal.target.value)
    }


    const content =(
        <div id="input">
            <div class='inputName'>&nbsp;Custom Input</div>
            <textarea className='input' name='input' onChange={inputChange} value={props.input}></textarea>        
        </div>
    );
    return content;
}

export default Input;