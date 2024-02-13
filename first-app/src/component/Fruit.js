import React, { useState } from 'react'

function Fruit() {
    const [fruit, setFruit] = useState('apple');
    const updateFruit = (fruit) =>{
        setFruit(fruit);
    }
    return (
        <>
            <p>the value of Fruit is:  {fruit} </p>
            <button onClick={() => setFruit('mango')}>Mango</button>
            <button onClick={() => updateFruit('Papaya')}>Papaya</button>
            <button onClick={() => setFruit('apple')}>Apple</button>

            {/* 
            many event handler present there like for button onclick
            for input is onChange
             */}
        </>
    )
}

export default Fruit;