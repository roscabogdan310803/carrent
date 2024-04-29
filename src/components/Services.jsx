import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';



const Services = () => { 

  gsap.registerPlugin(ScrollTrigger) 

  useGSAP(() => {
    gsap.to(".section-2", {
      scrollTrigger:".section-2",
      opacity:1,
      delay:0.25,
    })
  })

  return (
    <section className='section-2' id='services'>
      <div className='services-header'>
        <h1>These are our services</h1>
        <img src="./ceva.jpeg" alt="" />
      </div>
      <div className="services-info">
	      <div className="services">
          <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eos repellat molestias hic voluptatum! Impedit eos similique provident obcaecati ea, repellendus itaque laudantium voluptatum numquam illum! Amet quas dolorum distinctio!</h6>
        </div>
	      <div className="services">
          <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eos repellat molestias hic voluptatum! Impedit eos similique provident obcaecati ea, repellendus itaque laudantium voluptatum numquam illum! Amet quas dolorum distinctio!</h6>
        </div>
	      <div className="services">
          <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eos repellat molestias hic voluptatum! Impedit eos similique provident obcaecati ea, repellendus itaque laudantium voluptatum numquam illum! Amet quas dolorum distinctio!</h6>
        </div>
      </div>
    </section>
  )
}

export default Services
