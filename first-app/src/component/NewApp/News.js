import React from 'react'
import './news.css'
function News({props}) {
  return (
    <div className='news-card'>
        <img src= {props.urlToImage} alt = {props.title} />
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
  )
}

export default News