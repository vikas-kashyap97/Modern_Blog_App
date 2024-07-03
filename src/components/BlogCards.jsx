import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCards = ({ blogs }) => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {blogs.map(blog => (
        <Link key={blog.id} to={`/blogs/${blog.id}`} className='p-5 shadow-lg rounded cursor-pointer'>
          <div>
            <img src={blog.image} alt="" className='w-full shadow-2xl shadow-black' />
          </div>
          <h3 className='mt-4 mb-2 font-bold hover:text-blue-600'>{blog.title}</h3>
          <p className='mb-2 text-gray-700'>
            <FaUser className='inline-flex items-center mr-2' />
            {blog.author}
          </p>
          <p className='text-sm text-gray-600'>Published: {blog.published_date}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
