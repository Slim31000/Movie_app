import React from 'react'
import './MovieCard.css'
import Star from '../../assets/glowing-star.png'
import './MovieList.css'
export const MovieCard = (props) => {
  const {movie} = props
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='blank' className='movie_card'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" className='movie_poster' />
        <div className="movie_details">
            <h3 className='movie_details_heading'>{movie.original_title}</h3>
            <div className="align_center movie_date_rate">
                <p>{movie.release_date}</p>
                <p>{movie.vote_average} <img src={Star} alt="star" className='card_emoji'/></p>
            </div>
                <p className='movie_desription'>
                  {movie.overview.slice(0,100)+'...'}
                </p>
        </div>
    </a>
  )
}
