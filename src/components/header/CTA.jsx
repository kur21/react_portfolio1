import React from 'react'
import CV from '../../assets/CV – Nguyễn Trung Hiếu – Fresher Frontend.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA