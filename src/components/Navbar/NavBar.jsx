import React from 'react'
import './NavBar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'


function NavBar() {
  return (
    <nav className='navbar'>
        <h1>MovieSalem</h1>
        <div className='navbar_links'>
            <a href="">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></a>
            <a href="">Top Rated <img src={Star} alt="star emoji" className='navbar_emoji' /></a>
            <a href="">Upcoming <img src={Party} alt="party emoji" className='navbar_emoji' /></a>
        </div>
    </nav>
  )
}

export default NavBar