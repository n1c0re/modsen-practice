import React from "react";
import BookContainer from "./BookContainer";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="foundText">Found 1 results</div>
      <div className="books">
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />

      </div>
    </div>
  );
};

export default SearchPage;
