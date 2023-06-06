import React from "react";
import "./BookPage.css"

const BookPage = () => {
  return (
    <div className="bookpage">
      <div className="bookImage">
        <img
          src="https://www.codewars.com/packs/assets/logo.61192cf7.svg"
          alt="Book Cover"
        />
      </div>
      <div className="bookInfo">
        <p class="book-category">Category</p>
        <h2 class="book-name">Name</h2>
        <p class="book-author">Author</p>
      </div>
    </div>
  );
};

export default BookPage;
