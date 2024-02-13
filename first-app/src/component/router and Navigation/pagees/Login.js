import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[name, setname] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        if(name === 'ankit'){
            navigate('/profile/ankit')
        }else {
            navigate('/about');
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setname(e.target.value)}/>
        </form>
        </div>
    )
}

export default Login