import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from './context'
import { useState } from 'react'
import { useEffect } from 'react'

const SingleMovie = () => {

  const { id } = useParams()


  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState("")

  const api_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=`

  // ............................fetchhing api .................


  const getMovies = async (api) => {
    setIsLoading(true);
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data)


      if (data.Response === "True") {
        setIsLoading(false)
        setMovie(data)
       
      }
     
      console.log(api)
      console.log(movie)
    } catch (error) { console.log(error) }



  }


  useEffect(() => {

    const timer = setTimeout(() => {
      getMovies(`${api_url}${id}`)
    }, 500);
    return () => clearTimeout(timer)
  }, [id])




if(isLoading)
return(
  <div className='movie-section'>
  <div className='loading'>LOADING....</div>
  
  </div>
)

  return (
       
       <section className='movie-section'>
       <div className='movie-card'>

       <figure>
       <img src={movie.Poster} />
       
       </figure>

       <div className='card-content'>
       <p className='title'>Movie Nmae :{movie.Title}</p>
       <p className='card-text'>Date of Released :{movie.Released}</p>
       <p className='card-text'>{movie.Genre}</p>
       <p className='card-text'> Rating :{movie.imdbRating}</p>
       <p className='card-text'> Country : {movie.Country}</p>
       <NavLink to="/" className="back-btn">Go back</NavLink>

       
       
       
       
       </div>
       
       </div>
       
       </section>
       
       
       
  )
}

export default SingleMovie
