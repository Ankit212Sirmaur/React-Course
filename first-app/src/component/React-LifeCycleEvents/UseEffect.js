import React, { useEffect, useState } from 'react'

function UseEffect() {
    
    const [counter, setCounter] = useState(null);

    function callWhenUnmount(){

    }
    useEffect(()=>{
        console.log(counter, 'counter updated');

        /**
         * this return function call after useEffect;
            return callWhenUnmount; 
         */
    }); 

    // clean-up function 
  return (
    <div>
        <p>value is {counter} </p>
        <button onClick={() => setCounter(counter+1) }>Increment</button>
    </div>
  )
}

export default UseEffect