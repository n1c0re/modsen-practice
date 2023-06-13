import React from "react";
import BookContainer from "./BookContainer";
import "../Css/ResultZone.css";

const ResultZone = (props) => {
  try {
    
    return (
      <>
        {props.bookData.length !== 0 ? (
          <>
            <div className="foundText">
              Found {props.totalItems} books
            </div>
            <div className="searchPage">
              <BookContainer bookData={props.bookData} />
            </div>
            <button onClick={props.loadMore} className="more">
              Load More
            </button>
          </>
        ) : (
          <div className="foundText">No books found</div>
        )}
      </>
    );
  } catch (error) {
    console.error();
  }
};

export default ResultZone;
