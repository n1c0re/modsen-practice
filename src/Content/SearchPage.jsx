import React, { useState } from "react";
import BookContainer from "./BookContainer";
import "./SearchPage.css";
import axios from "axios";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(" ");
  const [sorting, setSorting] = useState("relevance");
  const [bookData, setData] = useState([]);

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${sorting}&key=AIzaSyAVHh3aAiSke8Ap6Zx6qtYfTVTZsPqNP8U&maxResults=10`
        )
        .then((response) => setData(response.data.items))
        .catch((error) => console.log(error));
      console.log(bookData);
      console.log(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${sorting}&key=AIzaSyAVHh3aAiSke8Ap6Zx6qtYfTVTZsPqNP8U&maxResults=10`);
      console.log(category);
    }
  };
  return (
    <>
      <div className="header">
        <div className="search-container">
          <h2>Search for books</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter book name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="filters">
            <p>Categories</p>
            <select
              name="categories"
              id="category-select"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="computers">Computers</option>
              <option value="science">Science</option>
              <option value="art">Art</option>
            </select>
            <p>Sorting by</p>
            <select name="sorting" id="sorting-select" onChange={(e) => {
                setSorting(e.target.value);
              }}>
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
      {/* {(bookData.length !== 0) ? <div>Found {bookData.data.totalItems} books</div> : ""} */}
      <div className="searchPage">
        <BookContainer book={bookData} />
      </div>
    </>
  );
};

export default SearchPage;
