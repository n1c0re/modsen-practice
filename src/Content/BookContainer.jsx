import React from "react";
import "./BookContainer.css";

const BookContainer = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((book) => {
        return (
          <div className="book-container">
            <img
              src="https://www.codewars.com/packs/assets/logo.61192cf7.svg"
              alt="Book Cover"
            />
            <div className="bookInfo">
              <p class="book-category">Category</p>
              <h2 class="book-name">Name</h2>
              <p class="book-author">Author</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default BookContainer;
