import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'><h1>Search for books</h1>
    <div className='container'>
      <textarea class="bookName"></textarea>
      <div class="filters">
        <p>Categories</p>
        <select name="categories" id="category-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
      </select>
        <p>Sorting by</p>
        <select name="sorting" id="sorting-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
      </select></div>
      </div>
      </div>
  )
}

export default Header