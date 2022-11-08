import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href='https://linkedin.com'><BsLinkedin/></a>
     <a href='https://github.com/Seunelvis1'><BsGithub/></a>
     <a href='https://twitter.com'><FaTwitter/></a>

    </div>
  )
}
 
export default HeaderSocials