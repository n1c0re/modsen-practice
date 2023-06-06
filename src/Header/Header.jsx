import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'><h1>Search for books</h1>
    <div className='container'>
      <input class="bookName" maxLength={38}></input>
      <button class="searchButton"><img className='searchImage' src='search.png' width="25px"/></button>
      </div>
      <div class="filters">
        <p>Categories</p>
        <select name="categories" id="category-select">
          <option value="">All</option>
          <option value="dog">Computers</option>
          <option value="cat">Romance</option>
          <option value="cat">Art</option>
      </select>
        <p>Sorting by</p>
        <select name="sorting" id="sorting-select">
          <option value="">Relevance</option>
          <option value="dog">Ascending(A-&gt;Z)</option>
          <option value="cat">Descending(A&#60;-Z)</option>
      </select></div>
      </div>
  )
}

export default Header