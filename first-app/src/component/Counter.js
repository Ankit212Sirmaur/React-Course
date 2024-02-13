import React, { useState } from 'react'

function Counter() {

  let [count, setCounter] = useState(0);

  function updateCount(){
    setCounter(count+1);
    
    console.log(count, "value of current counter");
  }
  function updateCount2(){
    setCounter(count-1);
  }
  return (
    <div>
      <p>the value of counter is: {count} </p>
      {/* <p>THT VALUE OF BELOW COUNTER IS: {count}</p> */}
      <button onClick={updateCount}>Increment</button>
      <button onClick={updateCount2}>Decrement</button>
    </div>
  )
}

export default Counter;