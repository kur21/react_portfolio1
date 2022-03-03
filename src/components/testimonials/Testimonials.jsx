import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avt1.jpg'
import AVT2 from '../../assets/avt2.jpg'
import AVT3 from '../../assets/avt3.jpg'
import AVT4 from '../../assets/avt4.jpg'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'Michelle Ding',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aperiam officiis nostrum hic maxime! Ut consectetur porro ab ipsa voluptas possimus veritatis? Fuga adipisci odit cum error dolorum culpa ipsa?'
  },
  {
    avatar: AVT2,
    name: 'Sung Wang',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVT3,
    name: 'Dale Alejandro',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVT4,
    name: 'Lau Keith',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={80}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {data.map(({avatar, name, review}, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="client avatar" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <p className="client__review">{review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials