import React, { useEffect, useState } from 'react'
import _ from "lodash"


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
    const[sort, setSort]= useState({by:"default", order:"asc"})

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

    const handlesort=(e)=>{
        const {name, value}= e.target
        setSort((prev)=> ({...prev,[name]:value}))
    }
    console.log(sort)

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

useEffect(()=>{
    if(sort.by!=="default"){
       const sortedMovie= _.orderBy(filterMovie,[sort.by],[sort.order])
       setFilterMovie(sortedMovie)
    }
},[sort])

  return (
    <section className="movie_list">
        {/* header */}
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></h2>
            <div className='align_center movie_list_fs'>
                <FilterGroup minRatin={minRatin} handleFilter={handleFilter} ratings ={[8,7,6]}/>
                <select name="by" id="" onChange={e=>handlesort(e)} value={sort.by} className="movie_sorting">
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" onChange={e=>handlesort(e)} value={sort.order} className="movie_sorting">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                    
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