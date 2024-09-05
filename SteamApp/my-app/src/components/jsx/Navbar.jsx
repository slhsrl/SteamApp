import React, { useState } from 'react'
import '../css/Navbar.css'
import Navigations from './Navigations'

const Navbar = () => {

  return (
    <>
      <div className='navbar-upper'>
        <div className='navbar-upper-left'>
          <a className='nav-steam-icon-a' href="http://localhost:5173/" aria-label="Steam Ana Sayfası Bağlantısı">
            <i className="fa-brands fa-steam fa-xl steam-icon"></i><div className='nav-steam-icon-text'>Steam</div>
          </a>
          <a className='nav-steam-icon-a' href="#" >
            Görünüm
          </a>
          <a className='nav-steam-icon-a' href="#" >
            Arkadaşlar
          </a>
          <a className='nav-steam-icon-a' href="#" >
            Oyunlar
          </a>
          <a className='nav-steam-icon-a' href="#" >
            Yardım
          </a>
        </div>

        <div className='navbar-upper-right'>
          <div className='nav-right-a-megaphone'>
            <a className='nav-right-a-megaphone-icon' href="#" >
            <i className="fa-solid fa-bullhorn "></i>
            </a>
          </div>
          <div className='nav-right-a-bell'>
            <a className='nav-right-a-bell-icon' href="#" >
            <i className="fa-solid fa-bell "></i>
            </a>
          </div>
          <div className='nav-right-a-user'>
            <a className='nav-steam-icon-a' href="#" >
            <img className='nav-rigt-user-image' src='' ></img><div className='nav-rigt-user'>slhsrl</div>
            </a>
          </div>

        </div>
      </div>
      <div className='navbar-lover'>
        <div className='navbar-lover-arrow'>
        <i  className="fa-solid fa-arrow-left fa-xl"></i>
        <i className="fa-solid fa-arrow-right fa-xl"></i>
        </div>
            <Navigations />
      </div>
    </>
  )
}

export default Navbar