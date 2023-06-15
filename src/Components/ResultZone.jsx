import React from "react";
import BookContainer from "./BookContainer";
import "../Css/ResultZone.css";

const ResultZone = (props) => {
  try {
    return (
      <>
        <div className="foundText">Found {props.totalItems} books</div>
        <div className="resultZone">
          <BookContainer bookData={props.bookData} />
        </div>
        {props.bookData.length !== 0 ? (
          <button onClick={props.loadMore} className="more">
            Load More
          </button>
        ) : (
          ""
        )}
      </>
    );
  } catch (error) {
    console.error();
  }
};

export default ResultZone;
