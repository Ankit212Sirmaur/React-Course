import React from 'react'

function SingleNote(props) {
  return (
    <div>
        <p className='noteText'>{props.n}</p>
    </div>
  )
}

export default SingleNote