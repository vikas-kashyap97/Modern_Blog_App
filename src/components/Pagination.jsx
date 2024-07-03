import React from 'react';

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const renderPaginationLinks = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li className={i === currentPage ? "activePagination" : ""} key={i}>
          <button onClick={() => onPageChange(i)}>{i}</button>
        </li>
      );
    }
    return pages;
  };

  return (
    <ul className='pagination my-8 flex-wrap gap-4 '>
      <li>
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className='flex gap-1'>{renderPaginationLinks()}</div>
      <li>
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
