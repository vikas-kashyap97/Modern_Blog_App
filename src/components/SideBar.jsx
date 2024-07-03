import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa6';

// Importing JSON data
import blogsData from '../api/blogsData.json';

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    // Slice the data if needed
    setPopularBlogs(blogsData.slice(0, 15));
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(5, 10).map(blog =>
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center 
                py-1">Read more <FaArrowRight className="mt-1 ml-2" /></Link>
            </div>)
          }
        </div>
      </div>

      <div> 
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map(blog =>
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center 
                py-1">Read more <FaArrowRight className="mt-1 ml-2" /></Link>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default SideBar;
