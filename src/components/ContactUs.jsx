import React from 'react';

const ContactUs = () => {
  return (
    <div className='container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Contact Us</h1>
        <hr className='mt-4 mb-8'/>
      </div>
      <div className='space-y-8'>
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-orange-500'>News Tips</h2>
          <p className='text-lg sm:text-xl md:text-2xl mt-2'>
            Got a news tip or inside information about a topic we covered? We’d love to hear from you. Please drop us a note at <a href="mailto:tips@30dayscoding.com" className='text-green-600 underline underline-offset-4'>tips@30dayscoding.com</a>.
          </p>
          <p className='text-lg sm:text-xl md:text-2xl mt-2'>
            <span className='font-bold'>If you prefer to remain anonymous,</span> <a href="/" className='text-green-600 underline underline-offset-4'>click here to contact us</a> ,which includes SecureDrop (instructions here) and various encrypted messaging apps.
          </p>
        </div>
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-orange-500'>Events Related Inquiries</h2>
          <p className='text-lg sm:text-xl md:text-2xl mt-2'>
            If you have a question related to our events, please contact <a href="/" className='text-green-600 underline underline-offset-4'>events@30dayscoding.com</a>.
          </p>
        </div>
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-orange-500'>Advertising & Sponsorships</h2>
          <p className='text-lg sm:text-xl md:text-2xl mt-2'>
            Please <a href="/" className='text-green-600 underline underline-offset-4'>complete this form</a> and an account executive will get back to you quickly.
          </p>
        </div>
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-orange-500'>TC+ Related Inquiries</h2>
          <p className='text-lg sm:text-xl md:text-2xl mt-2'>
            For account and payment issues, please contact <a href="/" className='text-green-600 underline underline-offset-4'>plus@30dayscoding.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
