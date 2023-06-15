import React from "react";
import "../Css/SearchZone.css";
import { useNavigate } from "react-router-dom";

const SearchZone = (props) => {
  const navigate = useNavigate();
  
  function handleClick() {
    props.clearSearch();
    navigate("/");
  }
  return (
    <div className="header">
      <div className="searchContainer">
        <h2>Search for books</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Enter book name"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.clearSearch();
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
              props.setCategory(e.target.value);
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
              props.setSorting(e.target.value);
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
