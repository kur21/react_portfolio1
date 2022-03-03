import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Trung Hieu</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <Link 
          to="contact" spy={true} smooth={true} duration={800} offset={-50} 
          className='scroll_down'
        >
          Scroll Down
        </Link>
      </div>
    </header>
  )
}

export default Header