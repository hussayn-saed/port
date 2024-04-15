import React from 'react'
import Logo from './images/bird-colorful-logo-gradient-vector_343694-1365-modified.png'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'
const Nav = () => {

  const path = useLocation()


  return (
    <nav className='nav-bar'>
      <img className='img' src={Logo} alt="logo" />
      <div className='content'>
        <ul>
          <li><Link className={path.pathname === '/' ? "active" : ""} to='/'>Home</Link></li>
          <li><Link className={path.pathname === '/about' ? "active" : ""} to='/about'>About</Link></li>
          <li><Link className={path.pathname === '/contact' ? "active" : ""} to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav