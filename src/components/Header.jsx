import React from 'react'
import logo from '../components/morty.png';
const Header = () => {
  return (
    <div className='cabecera'>
        <header>
        <img src={logo} alt="imagen"></img>
        </header>
    </div>
  )
}

export default Header