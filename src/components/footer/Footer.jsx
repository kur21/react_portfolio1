import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="!#" className='footer__logo'>TRUNGHIEU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="facebook.com"><FaFacebookF/></a>
        <a href="instagram.com"><FaInstagram/></a>
        <a href="twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer