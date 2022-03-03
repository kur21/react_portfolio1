import React from 'react'
import './nav.css'
import { BiHome, BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
		<nav>
			<Link to="header" spy={true} smooth={true} duration={800} offset={-50}>
        <BiHome />
      </Link>
			<Link to="about" spy={true} smooth={true} duration={800} offset={-50}>
				<AiOutlineUser />
			</Link>
			<Link to="experience" spy={true} smooth={true} duration={800} offset={-50}>
				<BiBook />
			</Link>
			<Link to="services" spy={true} smooth={true} duration={800} offset={-50}>
				<RiServiceLine />
			</Link>
			<Link to="contact" spy={true} smooth={true} duration={800} offset={-50}>
				<BiMessageSquareDetail />
			</Link>
		</nav>
	)
}

export default Nav