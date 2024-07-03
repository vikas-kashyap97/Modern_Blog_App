import React from 'react'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4 '>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Page</h2>
      </div>
      <ContactUs/>
    </div>
  )
}

export default Contact