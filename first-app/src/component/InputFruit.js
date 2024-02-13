import React, { useState } from 'react'

function InputFruit() {
    const [fruit, setFruit] = useState('apple');
    const [input, setInput] = useState('');

    function updateInputText(event){
        const inputFruit = event.target.value;
        setInput(inputFruit);
    }
    const updateFruit = () =>{
        setFruit(input)
    }
  return (
    <div>
        <p>the value of fruit is: {fruit}</p>
        <input type="text" onChange={updateInputText}/>
        <button onClick={() => updateFruit()}> submit</button>
    </div>
  )
}

export default InputFruit