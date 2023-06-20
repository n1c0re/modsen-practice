import "./ResultZone.css";

import React, { useContext } from "react";

import { AppContext } from "../AppProvider";
import BookContainer from "../BookContainer/BookContainer";

const ResultZone = () => {
  const { bookData, loadMore, totalItems, loading } = useContext(AppContext);

  try {
    return (
      <> { loading ? <div className="loading">Loading books...</div> : <div className="foundText">Found {totalItems} books</div>}
        
        <div className="resultZone">
          <BookContainer bookData={bookData} />
        </div>
        {bookData.length !== 0 ? (
          <button onClick={loadMore} className="more">
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
