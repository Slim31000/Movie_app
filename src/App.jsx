import React from 'react'
import './app.css'
import NavBar from './components/Navbar/NavBar'
import MovieList from './components/MovieList/MovieList'


function App() {
  return (
    <div className='app'>
      
      <NavBar />
      <MovieList />
    </div>
  )
}

export default App