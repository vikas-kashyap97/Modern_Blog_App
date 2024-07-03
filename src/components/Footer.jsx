import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid gap-8 lg:grid-cols-6 mb-8'>
          <div className='grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4'>
            {/* category 1 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Category</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Worlds</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                </li>
              </ul>
            </div>

            {/* category 2 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>About</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                </li>
              </ul>
            </div>

            {/* category 3 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Legal</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Terms of Service</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Privacy Policy</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>RSS Terms of Use</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Privacy Dashboard</a>
                </li>
              </ul>
            </div>

            {/* category 4 */}
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Trending Tech Topics</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Evolve Bank Data Breach</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Meta AI</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>ChatGPT</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Tech Layoffs</a>
                </li>
              </ul>
            </div>
          </div>

          {/* subscription */}
          <div className='lg:col-span-2'>
            <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
            <form className='mt-4 flex flex-col md:flex-row'>
              <input
                type="email"
                name='email'
                id='email'
                className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none'
              />
              <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
          <p className='text-sm text-gray-500'>© 2024. All rights reserved. Powered by 30 days coding.</p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaXTwitter className='h-6 w-6' /></a>
            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram className='h-6 w-6' /></a>
            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaLinkedinIn className='h-6 w-6' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
