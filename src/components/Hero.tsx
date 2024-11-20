'use client'

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])
  return (
    <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url('/watch-background.jpg')"}}>
      <div className='pl-0 md:pl-16 text-white text-center'>
        <h1 className='text-6xl font-bold drop-shadow-md' data-aos='fade-up'>Welcome to Watch World</h1>
        <p className='text-2xl mt-4'>A watch website showcases a variety of stylish and functional <br />timepieces for men, women, and unisex wear.</p>
        <button className='mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-800 rounded-md font-bold'>Shop Now</button>
      </div>
    </section>
  )
}

export default Hero
