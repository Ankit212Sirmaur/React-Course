import React, { useState } from 'react'
import SingleNote from './SingleNote';

function Notes() {

    const[note, setNotes] = useState([]);
    const[currNote, setCurrNote] = useState('');

    function updateCurrent(event){
      setCurrNote(event.target.value)

    }
    function addNote(){
        const updateNotesarray = [currNote, ...note];
        setNotes(updateNotesarray);
    }
  return (
    <div>
        {/* <p>car property is {se}</p> */}
        <input type="text" onChange={updateCurrent} />
        <button onClick={addNote}>Submit</button>
        <ul>
          {note.map((n, idx) =>{
            // return <li  key = {idx} >{n} </li>
            return <li key={idx}> <SingleNote n = {n}/>
            </li>
            // isss parent se iske childern ko mila

            // ✅  implicitly returing 
          //   {note.map((n, idx) => (
          //     <li key={idx}>  <SingleNote n={n} />
          //     </li>
          // ))}
          })}
        </ul>
    </div>
  )
}

export default Notes