import React, { useState } from 'react';
import searchIcon from '../search.svg';

function Searchbar({ searchUrl, handleSetBooks }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = value => {
    setSearchTerm(value);
  };

  const searchBooks = async () => {
    const response = await fetch(`${searchUrl}?q=${searchTerm}`);
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
}

export default Searchbar;
