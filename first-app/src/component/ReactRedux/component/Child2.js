import React from 'react';
import { useSelector } from 'react-redux';

const Child2 = () => {

    const message = useSelector(store => store.messageReducer.message);
    console.log("message", message);
  return (
    <div>The data coming from the child 1 is :{message} </div>
  )
}

export default Child2;