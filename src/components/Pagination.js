import React, { useState } from 'react';

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const [activePageNumber, setActivePageNumber] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map(number => (
        <div
          className={`page-button ${
            activePageNumber === number ? 'page-active' : ''
          }`}
          key={number}
          onClick={() => {
            paginate(number);
            setActivePageNumber(number);
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
