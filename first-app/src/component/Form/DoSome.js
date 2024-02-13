import React, { useRef, useState } from 'react'

function DoSome() {
    const[option, setoption] = useState([]);
    const FruitSelect = useRef(null);
    function hanldeChange(event){
        event.preventDefault();
        let getFruit = event.target.value;
        if(!option.includes(getFruit)){
            setoption((fr)=> [...fr, getFruit]);
        }
    }
    const fruit = ["mango", "grapes", "guava"];
  return (
    <div>
        <form>
            <select name="" id="" ref={FruitSelect} onChange={hanldeChange}>
                {/* <option value="grapes">grapes</option>
                <option value="mango">mango</option>
                <option value="guava">guava</option> */}
                <option value=""></option>
            </select>
        </form>
        <ul>
            {option.map((elemet,index) =>(
                <li key={index}>{elemet}</li>
            ))}
        </ul>
    </div>
  )
}

export default DoSome