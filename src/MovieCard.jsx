import React from 'react'

const MovieCard = (props) => {
  return (
    <div>
      <h1>title : {props.el.title}</h1>
      <h2>description : {props.el.description}</h2>
      <img src={props.el.posterUrl} /> 
      <h2>rating : {props.el.rating}</h2>
    </div>
  )
}

export default MovieCard