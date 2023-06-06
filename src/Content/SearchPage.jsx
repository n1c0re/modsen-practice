import React from "react";
import BookContainer from "./BookContainer";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="SearchPage">
      <div className="foundText">Found 1 results</div>
      <BookContainer />
      <BookContainer />
    </div>
  );
};

export default SearchPage;
