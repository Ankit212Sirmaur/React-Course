import React, { useRef, useState } from 'react'

function Select() {
    const [Options, setOptions] = useState([]);

    const fruitSelect = useRef(null);

    function handleChange(event) {
        console.log(event.target.value);
        let ans = event.target.value;

        if (!Options.includes(ans)) {
            setOptions([...Options, ans]);
        }
        alert(fruitSelect.current.value);
    }


    return (
        <div>
            <form action="">
                <select name="" id="" ref={fruitSelect} onChange={handleChange}>
                    <option value="apple">apple</option>
                    <option value="guava">guava</option>
                    <option value="littichi">littichi</option>
                    <option value="mango">mango</option>
                </select>
            </form>
            <ul>
                {Options.map((option, key) => (
                    <li key={key}>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Select