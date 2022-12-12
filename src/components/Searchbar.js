import React, { useState } from 'react';
import searchIcon from '../search.svg';

const Searchbar = ({ searchUrl, maxResults, handleSetBooks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = value => setSearchTerm(value);

  const searchQuery = `${searchUrl}?q=${searchTerm}&maxResults=${maxResults}`;

  const searchBooks = async () => {
    const response = await fetch(searchQuery);
    const data = await response.json();
    handleSetBooks(data);
    handleInputChange('');
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a book..."
        value={searchTerm}
        onChange={e => {
          handleInputChange(e.target.value);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') searchBooks(searchTerm);
        }}
      />
      <img
        src={searchIcon}
        alt="search icon"
        onClick={() => {
          searchBooks(searchTerm);
        }}
      />
    </div>
  );
};

export default Searchbar;
