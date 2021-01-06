import React from 'react';
import "./language.css"

const Language = props =>{
    const langChange = (newVal)=>{
        newVal = newVal.target.value;
        props.changeLanguage(newVal)
        if(newVal==="c++"){
            props.mode("c_cpp")
        }
        else if(newVal==='python'){
            props.mode("python")
        }
        else if(newVal==='java'){
            props.mode("java")
        }
    }


    const content = (
        <select id='language' name='language' onChange={langChange}>
            <option value='c++'>C++</option>
            <option value='python'>Python</option>
            <option value='java'>Java</option>
        </select>
    );
    return content;
}

export default Language;