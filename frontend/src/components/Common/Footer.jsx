import React from 'react'
import { Link } from 'react-router-dom';
import {TbBrandMeta} from "react-icons/tb"
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import {FiPhoneCall} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='border-t py-12 bg-white'>
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>NewsLetter</h3>
            <p className='text-gray-500 mb-3'>
                <span>Be the first to hear about new products,</span>
                 exclusive events and online offers.
            </p>
            <p className='text-gray-600 font-medium text-sm mb-6'>
                Sign up and get <span className='text-black font-semibold'>15% off</span> on your first order.
            </p>
            {/* newletter form */}
           <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
          </div>

          {/* shop links */}
          <div>
            <h3 className='text-lg text-gray-800 mb-4'>
                Shop
            </h3>
            <ul className='space-y-2 text-gray-600'>
               <li>
                 <Link to ="/collections/all?gender=Men&category=Top Wear" className='hover:text-gray-500 transition-colors'>Men's Top Wear</Link>
                 </li>
                 <li>
                 <Link to ="/collections/all?gender=Women&category=Top Wear" className='hover:text-gray-500 transition-colors'>Women's Top Wear</Link>
                 </li>
                 <li>
                 <Link to ="/collections/all?gender=Men&category=Bottom Wear" className='hover:text-gray-500 transition-colors'>Men's Bottom Wear</Link>
                 </li>
                 <li>
                 <Link to ="/collections/all?gender=Women&category=Bottom Wear" className='hover:text-gray-500 transition-colors'>Women's Bottom Wear</Link>
                 </li>
               
            </ul>
          </div>

          {/* support links */}
          <div>
            <h3 className='text-lg text-gray-800 mb-4'>
                Support
            </h3>
            <ul className='space-y-2 text-gray-600'>
               <li>
                 <Link to ="#" className='hover:text-gray-500 transition-colors'>Contact Us</Link>
                 </li>
                 <li>
                 <Link to ="#" className='hover:text-gray-500 transition-colors'>About Us</Link>
                 </li>
                 <li>
                 <Link to ="#" className='hover:text-gray-500 transition-colors'>FAQs</Link>
                 </li>
                 <li>
                 <Link to ="#" className='hover:text-gray-500 transition-colors'>Features</Link>
                 </li>
               
            </ul>
          </div>

          {/* follow us */}
          <div>
            <h3 className='text-lg text-gray-800 mb-4'>
                Follow Us
            </h3>
            <div className='flex items-center space-x-4 mb-6'>
               <a href="https://www.facebook.com/ " target='blank' 
               rel="noopener noreferrer"
               className='hover:text-gray-500'>
                <TbBrandMeta className='h-5 w-5'/>
               </a>

               <a href="https://www.facebook.com/ " target='blank' 
               rel="noopener noreferrer"
               className='hover:text-gray-500'>
                <IoLogoInstagram className='h-5 w-5'/>
               </a>

               <a href="https://www.facebook.com/ " target='blank' 
               rel="noopener noreferrer"
               className='hover:text-gray-500'>
                <RiTwitterXLine className='h-4 w-5'/>
               </a>
            </div>
            <p className='text-gray-500'>Call Us</p>
            <p>
                <FiPhoneCall className='inline-block mr-2'/>
                +123-456-987
            </p>
          </div>
       </div>

       {/* footer bottom for copyright */}

        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
           <p className='text-gray-500 text-sm tracking-tighter text-center'>
             @ 2025,Nyvra. All Rights Reserved.
           </p>
        </div>


    </footer>
  )
}

export default Footer
