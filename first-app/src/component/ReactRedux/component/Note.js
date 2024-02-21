import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../Slice/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

function Note() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createNote({
            title,
            desc,
            id: nanoid(9)
        }))
    }
    return (
        <div>
            <input type="text" placeholder='title here' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='description about notes' onChange={(e) => setDesc(e.target.value)} />
            <input type="submit" onClick={handleSubmit} />
        </div>
    )
}

export default Note