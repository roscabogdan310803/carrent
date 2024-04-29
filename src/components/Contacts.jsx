import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export const Contacts = () => {

  gsap.registerPlugin(ScrollTrigger) 

  useGSAP(() => {
    gsap.to("#cont", {
      scrollTrigger:"#cont",
      opacity:1,
      delay:0.25,
    })
  })

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_zolytsv', 'template_5ibvaqr', form.current, {
          publicKey: 'v6nu5-GH4V2QJ4DiA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <div className='section-3' id='cont'>
        <div className='contact-info'>
          <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <h1>Contact us here!</h1>
          <input type="text" name="user_name" placeholder='Name' />
          <input type="email" name="user_email"  placeholder='abc@mail.com' />
          <textarea name="message"  placeholder='Message' />
          <input type="submit" value="Send" />
          </form>
        </div>
     </div>
    );
};

export default Contacts
