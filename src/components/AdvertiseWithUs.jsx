import React from 'react';

const AdvertiseWithUs = () => {
  return (
    <div className='container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Advertise with 30dayscoding</h1>
        <hr className='mt-4 mb-8' />
      </div>
      <div className='space-y-8'>
        <p className='text-lg sm:text-xl md:text-2xl'>
        30dayscoding offers partners an unsurpassed platform to reach passionate tech visionaries building the businesses of the future. Through a strategic combination of in-person and virtual events, digital media, and branded content, 30dayscoding creates influential content that engages readers and establishes brands as industry thought leaders.
        </p>
        <p className='text-lg sm:text-xl md:text-2xl'>
          Stay up to date on advertising opportunities by subscribing to the TC Partnerships monthly newsletter.
        </p>
        <form className='mt-4 text-center'>
          <label className='block text-lg sm:text-xl md:text-2xl font-semibold mb-2 hover:text-orange-500' htmlFor='email'>
            Email address (required)
          </label>
          <input
            type='email'
            id='email'
            className='w-full sm:w-2/3 md:w-1/2 px-3 py-2 border border-gray-300 rounded-md text-base sm:text-lg md:text-xl'
            placeholder='Email address'
            required
          />
          <button
            type='submit'
            className='mt-4 px-6 py-2 bg-green-600 text-white text-lg sm:text-xl hover:bg-orange-600 ml-2 rounded-[5px]'
          >
            Subscribe
          </button>
        </form>
        <p className='text-lg sm:text-xl md:text-2xl mt-2 text-center'>
          By submitting your email, you agree to our <a href="/" className='text-green-600 underline underline-offset-4'>Terms</a> and <a href="/" className='text-green-600 underline underline-offset-4'>Privacy Notice</a>.
        </p>
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
