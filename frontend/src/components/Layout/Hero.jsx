import React from 'react'
import heroImg from "../../assets/hero5.jpg"
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative w-full'>
        <img src={heroImg} alt='rabbit-hero-img' className='w-full h-[400px]
        md:h-[600px] lg:h-[750px] object-cover'/>

        <div className='absolute inset-0 bg-black/5 flex items-center justify-center'>
          <div className='text-center text-white p-4 md:p-8'>
              <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
                Vacation <br />Ready 
              </h1>
              <p className=' text-sm tracking-tighter md:text-lg mb-6'>
                Explore our vacation ready outfits with fast worldwide shipping
              </p>
              <Link to="/collections/all" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-sm text-base md:text-lg font-medium hover:bg-gray-200 transition-colors">
              Shop Now
              </Link>
          </div>
        </div>
    </section>
  )
}

export default Hero
