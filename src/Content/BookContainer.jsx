import React from "react";
import { NavLink } from "react-router-dom";
import "./BookContainer.css";

const BookContainer = ( {book} ) => {
  return book.map((item) => {
    if (item.volumeInfo.imageLinks !== undefined) {
      return (
        <div className="book-container">
        <NavLink to="/book" ><img src={item.volumeInfo.imageLinks.thumbnail} alt="Book image" /></NavLink>
          <div className="bookInfo">
            <p class="book-category">{item.volumeInfo.categories}</p>
            <h2 class="book-name">{item.volumeInfo.title}</h2>
            <p class="book-author">{item.volumeInfo.authors}</p>
          </div>
        </div>
      );
    }
  });
};
export default BookContainer;
