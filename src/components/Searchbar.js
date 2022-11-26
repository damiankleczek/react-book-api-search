import React from 'react';
import searchIcon from '../search.svg';

function Searchbar() {
  return (
    <div className="search">
      <input type="text" placeholder="Search a book..." />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
}

export default Searchbar;
