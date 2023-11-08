import React from 'react'
import {NavLink} from "react-router-dom"
import { useGlobalContext } from './context'
import './style.css';
const Movies = () => {

  const {movie} = useGlobalContext()

  return (

    <section className='movie-page'>
  
    <div className='container grid grid-4-col'>

    {movie.map((eee)=>{
      const {imdbID ,Title ,Poster}=eee
      const moviename=Title.slice(0 ,19)
        return(
          <NavLink to={`movie/${imdbID}`} key={imdbID}>

          <div className='card'>
          <div className='card-info'>
          <h2>{moviename.length >= 19 ? `${moviename}...` : moviename}</h2>
          <img src={Poster}/>
          
          </div>
          
          </div>
          
          
          </NavLink>
        )


    })}
     



   

    </div>

    </section>
  )
}

export default Movies
