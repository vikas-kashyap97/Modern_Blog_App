import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import blogsData from '../api/blogsData.json';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchBlogs = () => {
      let filteredBlogs = blogsData;

      if (selectedCategory) {
        filteredBlogs = blogsData.filter(blog => blog.category === selectedCategory);
      }

      const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      setBlogs(paginatedBlogs);
    };

    fetchBlogs();
  }, [currentPage, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  const totalBlogs = selectedCategory
    ? blogsData.filter(blog => blog.category === selectedCategory).length
    : blogsData.length;

  return (
    <div>
      {/* Category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />
      </div>

      {/* BlogCards section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* BlogCards component */}
        <BlogCards blogs={blogs} />

        {/* Sidebar component */}
        <div>
          <SideBar />
        </div>
      </div>

      {/* Pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={Math.ceil(totalBlogs / pageSize)} />
      </div>
    </div>
  );
};

export default BlogPage;
