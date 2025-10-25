import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'
import { MovieCard } from './MovieCard'
import FilterGroup from './FilterGroup'



function MovieList() {
    const[dataMovie, setDataMovie] = useState([])
    const[filterMovie, setFilterMovie]= useState([])
    const[minRatin, setMinRating] = useState(0)

    const handleFilter= (rate)=>{

        if(rate===minRatin){
            setMinRating(0)
            setFilterMovie(dataMovie)
        }else{
            setMinRating(rate)
        
        const filtered = dataMovie.filter(movie => movie.vote_average >= rate )
        setFilterMovie(filtered)
        }
        
    }

  useEffect(()=>{
    const fetchMovies= async()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1da5d506960a4fc36fc361413c78688f')
        const data= await res.json()
        console.log(data)
        setDataMovie(data.results)
        setFilterMovie(data.results)
    }
    fetchMovies()
  },[])
  return (
    <section className="movie_list">
        {/* header */}
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></h2>
            <div className='align_center movie_list_fs'>
                <FilterGroup minRatin={minRatin} handleFilter={handleFilter} ratings ={[8,7,6]}/>
                <select name="" id="" className="movie_sorting">
                    <option value="">SortBy</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie_sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                    
                </select>
            </div>
        </header>
        {/* Movie Card */}
        <div className="movie_cards">
            {filterMovie.map((movie)=>{
                return <MovieCard key={movie.id} movie={movie}></MovieCard>
            })}
            
        </div>
    </section>
  )
}

export default MovieList