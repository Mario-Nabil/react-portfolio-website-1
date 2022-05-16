import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi everyone I'm</h4>
        <h1>Mario Nabil</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Mario Nabil Apaza León" />
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header