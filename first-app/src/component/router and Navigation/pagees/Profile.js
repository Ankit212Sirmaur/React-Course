import React, { useEffect } from 'react'
import {useParams} from 'react-router'
function Profile() {
    const parameters = useParams();

    useEffect(()=>{

    },[parameters]);
  return (
    <div>
        <p>Profile of {parameters.userId}</p>
    </div>
  )
}

export default Profile