﻿import React, { useState } from "react";
import "./Header.css";
import axios from "axios";

const Header = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAVHh3aAiSke8Ap6Zx6qtYfTVTZsPqNP8U`
        )
        .then((response) => setData(response))
        .catch((error) => console.log(error));
        console.log(bookData);
    }
  };
  return (
    <div className="header">
      <div className="search-container">
        <h2>Search for books</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Enter book name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="filters">
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
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
