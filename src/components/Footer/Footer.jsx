import React from 'react'
import './Footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
<section id="Footer">
  <footer>
    <a href='#Home' className='footer__logo'>SEUNELVIS</a>
  <ul className="permalinks">
    <li><a href='#Home'>About</a></li>
    <li><a href='#Home'>Experience</a></li>
    <li><a href='#Services'>Services</a></li>
    <li><a href='#Portfolio'>Portfolio</a></li>
    <li><a href='#Testimonials'>Testimonials</a></li>
    <li><a href='#Contact'>Contact</a></li>
    </ul>
  <div className='footer__socials'>
    <a href='https://twitter.com'><BsTwitter/> </a>
    <a href='https://github.com'><BsGithub/> </a>
    <a href='https://linkedin.com'> <BsLinkedin/></a>

  </div>

<div className='footer__copyright'>
<small> &copy; SEUNELVIS. Made with 💙 in Maitama</small>
</div>  
  </footer>


</section>  )
}

export default Footer