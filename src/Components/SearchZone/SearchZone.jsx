import "./SearchZone.css";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../AppProvider";

const SearchZone = () => {
  const navigate = useNavigate();

  function handleClick() {
    clearSearch();
    navigate("/");
  }

  const { search, setSearch, clearSearch, setCategory, setSorting } =
    useContext(AppContext);

  return (
    <div className="header">
      <div className="searchContainer">
        <h2>Search for books</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Enter book name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                clearSearch();
                navigate("/");
              }
            }}
          />
          <button onClick={handleClick}>
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
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
          <p>Sorting by</p>
          <select
            name="sorting"
            id="sorting-select"
            onChange={(e) => {
              setSorting(e.target.value);
            }}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchZone;
