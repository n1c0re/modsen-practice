import "./ResultZone.css";

import React, { useContext } from "react";

import { AppContext } from "../AppProvider";
import BookContainer from "../BookContainer/BookContainer";

function ResultZone() {
  const { bookData, loadMore, totalItems, loading } = useContext(AppContext);

  return (
      <> { loading ? <div className="loading">Loading books...</div> : <div className="foundText">Found {totalItems} books</div>}
        
        <div className="resultZone">
          <BookContainer bookData={bookData} />
        </div>
        {bookData.length !== 0 ? (
          <button type="submit" onClick={loadMore} className="more">
            Load More
          </button>
        ) : (
          ""
        )}
      </>
    );
}

export default ResultZone;
