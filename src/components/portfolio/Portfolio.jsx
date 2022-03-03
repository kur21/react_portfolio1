import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'GoToDream Mobile Application',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17626847-GoToDream-mobile-application'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Clean Chat App UI',
    github: 'https://github.com',
    demo: 'https://dribbble.com/goods/892961-Clean-Chat-App-UI'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Servee – Home Services App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17619407-Servee-Home-Services-App'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Gold & Silver Online Banking Onboarding',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17616549-Gold-Silver-Online-Banking-Onboarding'
  },
  {
    id: 5,
    image: IMG5,
    title: 'UI Components Dark Theme',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17578107-UI-Components-Dark-Theme'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Finance UI Elements Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14670971-Finance-UI-Elements-Design'
  }
]

const Portfolio = () => {
  return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map((item) => (
					<article className="portfolio__item" key={item.id}>
						<div className="portfolio__item-img">
							<img src={item.image} alt={`portfolio${item.id}`} />
						</div>
						<h3>{item.title}</h3>
						<div className="portfolio__item-cta">
							<a href={item.github} className="btn" target="_blank" rel="noreferrer">Github</a>
							<a href={item.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
								Live Demo
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Portfolio