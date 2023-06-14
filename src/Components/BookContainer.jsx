import React from "react";
import { Link } from "react-router-dom";
import "../Css/BookContainer.css";

const BookContainer = (props) => {
  if ("bookData" in props) {
    console.log(props.bookData);
    return props.bookData.map((item) => {
        return (
          <div className="book-container">
            <Link to={`/book/${item.id}`}>
              <img
                src={("imageLinks" in item.volumeInfo) ? item.volumeInfo.imageLinks.thumbnail : "../../public/undefinedBook.png"}
                alt="Book"
              />
            </Link>
            <div className="bookInfo">
              <div className="book-category">{("categories" in item.volumeInfo) ? item.volumeInfo.categories[0] : "No category"}</div>
              <h2 className="book-name">{("title" in item.volumeInfo) ? item.volumeInfo.title : "No title"}</h2>
              <div className="book-author">{("authors" in item.volumeInfo) ? item.volumeInfo.authors[0] : "No authors"}</div>
            </div>
          </div>
        );
    });
  } else {
    return "";
  }
};
export default BookContainer;
