import React, {useRef} from 'react'
import emailjs from "emailjs-com"
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { db } from "./firebase";
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const collectionRef = collection(db, 'users');
  const handleSubmit = () =>{
    addDoc(collectionRef, {
      email: 'email',
      name: 'name',
      message: "message"
    })
    .then(()=>{
      alert('data added')
    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_byogxs7', 'service_byogxs7', form.current, '09WARFKI6RAgtRWER')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
          
      // });
      e.target.reset();
  };
  return (
<section id="Contact">
<h5>Get in Touch</h5>
<h2>Contact Me</h2>
<div className='container contact__container'>
<div className='contact__options'>
<article className='contact__option'>
<MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<a href='mailto:adeniranoluwaseun' target="_blank" rel="noreferrer">Send A Message</a>
</article>
<article className='contact__option'>
<RiMessengerLine className='contact__option-icon' />
<h4>Messanger</h4>
<a href='mailto:adeniranoluwaseun' target="_blank" rel="noreferrer">Send A Message</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option-icon'/>
<h4>WhatsApp</h4>
<a href='https/api.whatsapp.com/send?phone=2348147405277' target="_blank">Send A Message</a>
</article>
</div>
{/* End of Contact Options */}
<div className='form'>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" placeholder="Your Full Name" required />
<input type="email" name="email" placeholder="Your Email" required />
<textarea name="message" rows="7" placeholder='Your Message'></textarea>
<button type="submit" className='btn btn-primary' onClick={handleSubmit}>Send Message</button>
</form>
</div>
</div>
</section>  )
}

export default Contact