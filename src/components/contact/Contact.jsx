import React from 'react'
import { useRef } from 'react'
import './contact.css'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef();
  const emailStatus = useRef()

  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('react-portfolio-egator', 'template_yqxuy35', form.current, 'Nk3hyw-INShrHmHLx')
      .then((result) => {
        emailStatus.current.innerText = 'Send';
      }, (error) => {
        emailStatus.current.innerText = 'Error';
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <p className="text-light">hieu21nt@gmail.com</p>
            <a href="mailto:hieu21nt@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <p className="text-light">hieulatuiii</p>
            <a href="https://www.m.me/Hieulatuiii/" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Phone</h4>
            <p className="text-light">+84 123 456 789</p>
            <a href="tel:+84123456789" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='contact__form-submit'>
            <button type='submit' className='btn btn-primary'>Send Messenger</button>
            <span ref={emailStatus}></span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact