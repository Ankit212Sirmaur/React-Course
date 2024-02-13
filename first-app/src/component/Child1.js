import React, {useState} from 'react'

function Child1(props) {
    const [countInChild1, setcountInChild1] = useState(0);

    function updatecount(){
        setcountInChild1(countInChild1+1);
        props.oncountupdate(countInChild1+1);
    }
  return (
    <div>
    <p> the child count is: {countInChild1}</p>    
    <button onClick={updatecount}>Increment </button>
    </div>
  )
}



export default Child1;
