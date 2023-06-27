import "./BookPage.css";

import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import undefinedBook from "../../assets/undefinedBook.png";
import { AppContext } from "../AppProvider";

function BookPage() {
  const { bookData } = useContext(AppContext);
  const { bookId } = useParams();
  
  const book = bookData.find((bookElement) => bookElement.id === bookId);

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(-1);
  }

  if (book) {
    return (
      <div className="bookpage">
        <div className="bookImage">
          <img
            src={
              book?.volumeInfo?.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : undefinedBook
            }
            alt="Book Cover"
          />
        </div>
        <div className="info">
          <button type="submit" className="backButton" onClick={handleClick}>
            Go Back
          </button>
          <div className="infoCategory">
            {book?.volumeInfo?.categories
              ? book.volumeInfo.categories[0]
              : "No category"}
          </div>
          <h2 className="infoName">
            {book?.volumeInfo?.title ? book.volumeInfo.title : "No title"}
          </h2>
          <div className="infoAuthor">
            {book?.volumeInfo?.authors
              ? book.volumeInfo.authors[0]
              : "No authors"}
          </div>
          <div className="infoDescription">
            {book?.volumeInfo?.description
              ? book.volumeInfo.description
                  .replace(/<(.)*?>/g, "")
                  .slice(0, 1400)
              : "No description"}
          </div>
        </div>
      </div>
    );
  }
}

export default BookPage;
