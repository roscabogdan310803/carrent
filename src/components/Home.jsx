import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  useGSAP(() =>{
    gsap.to('#text-1',{opacity:1, delay:0.35,y:-50})
    gsap.to('#car',{opacity:1, delay:.5, x:500})
    gsap.to('#span',{opacity:1, delay:.5,})
    gsap.to('#text-2',{opacity:1, delay:.5,y:10} )
  })

  return (
    <section className='section-1'>
      <div className='home-info'>
        <h1 id='text-1'>
          AWESOME <span id='span'>RIDES</span>
        </h1>
      </div>
      <img id='car' src="./limo.png" alt="" />
      <p id='text-2'>The only place where you get the VIP treatmeant</p>
    </section>
)}

export default Home

