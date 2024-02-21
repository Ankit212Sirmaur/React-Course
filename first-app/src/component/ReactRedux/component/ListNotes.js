import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../Slice/notesSlice';

function ListNotes() {
    const notes = useSelector((state) => state.noteReducer.notes);
    const dispatch = useDispatch();
  return (
    <div>
        {notes.map(note =>{
            return <div> 
                <h2> note.id</h2>
                <p> note.title</p>
                <p> note.desc</p>
                <button onClick={() => dispatch(deleteNote(note.id))}></button>
            </div>
        })}
    </div>
  )
}

export default ListNotes