import React from "react";
import BookContainer from "./BookContainer";
import "../Css/ResultZone.css";

const ResultZone = (props) => {
  return (
    <>
      {props.bookData.length !== 0 ? (
        <>
          <div className="foundText">
            Found {props.bookData.data.totalItems} books
          </div>
          <div className="searchPage">
            <BookContainer bookData={props.bookData} />
          </div>
          <button onClick={props.searchBook} className="more">
            Load More
          </button>
        </>
      ) : (
        <div className="foundText">No books found</div>
      )}
    </>
  );
};

export default ResultZone;
