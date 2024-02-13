import React, { useRef, useState } from 'react'

function UserForm() {
  const [name, setName] = useState([]);

  const nameInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const getName = nameInputRef.current.value;
    setName((prevName) => [...prevName, getName]);

    nameInputRef.current.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: '20px', margin: '20px' }} >
        <label htmlFor="name">Name</label>
        <input type="text" id='nameInput' ref={nameInputRef} />
        {/* <input type="text" onChange={(event) => setName(event.target.value)} /> */}
        <button onClick={handleSubmit} >submit</button>
      </form>
      <ul>
        {name.map((submittedName, index) => (
          <li key={index}>{submittedName}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserForm