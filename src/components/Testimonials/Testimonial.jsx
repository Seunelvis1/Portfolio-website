import React from 'react'
import './Testimonial.css'
import AVATR1 from '../../Assets/assets/avatar1.jpg'
import AVATR2 from '../../Assets/assets/avatar2.jpg'
import AVATR3 from '../../Assets/assets/avatar3.jpg'
import AVATR4 from '../../Assets/assets/avatar4.jpg'
import { Pagination, Navigation } from 'swiper'; 
import {Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination'


const dataObject = [
  {
    avatar: AVATR1,
    name: "Tina Snow",
    review: "I have hand-on skill with above average proficiency in Microsoft word, Microsoft excel, Microsoft access and disk operating system, all these I believe will aid my learning and mastery of the course and career path I have chosen for myself.I have hand-on skill with above average proficiency in Microsoft word, Microsoft excel, Microsoft access and disk operating system, all these I believe will aid my learning and mastery o",
  },
  {
    avatar: AVATR2,
    name: "Davido",
    review: "I have hand-on skill with above average proficiency in Microsoft word, Microsoft all these I believe will aid my learning and mastery of the course and career path I have chosen for myselfI have hand-on skill with above average proficiency in Microsoft word, Microsoft excel, Microsoft access and disk operating system, all these I believe will aid my learning and mastery of the course and career path I have chosen for myself.",
  },
  {
    avatar: AVATR3,
    name: "Wizkid",
    review: " I believe will aid my learning and mastery of the course and career all these I believe will aid my learning and mastery of the course and career path I have chosen for myselfI have hand-on skill with above average proficiency in Microsoft word, Microsoft excel, Microsoft access and disk operating system, all these I believe will aid my learning and mastery of the course and career path I have chosen for myself.",
  },
  {
    avatar: AVATR4,
    name: "Burna Boy",
    review: "I have hand-on skill with above average proficiency in Microsoft word, Microsoft soft access and disk operating system, all these I believe will aid my learning and mastery of the course and career path I have chosen for myself proficiency in Microsoft word, Microsoft excel, Microsoft access and disk operating system, all these I believe will aid my learning and mastery of the course and career path I have chosen for myself.",
  },
 
]





const Testimonial = () => {
  return (
<section id="Testimonial">
  <h5>Reviews from Clients</h5>
  <h2>Testimonials</h2>
  <Swiper className='container testimonials__container'
  /* install Swiper modules */
  modules ={[Pagination, Navigation]}
  spaceBetween={40}
  slidesPerview={1}
  pagination={{clickable:true}}>
   {
    dataObject.map(({avatar, name, review}, index) => {
      return (
        <SwiperSlide  key= {index} className='testimonial'>
    <div className='client__avatar'>
    <img src={avatar} alt='' />
     </div>
     <h5 className='client__name'>{name}</h5>
    <small className='client__review'>{review}</small>
    </SwiperSlide>
      )
    })
   }
    
  </Swiper>
</section>  )
}

export default Testimonial