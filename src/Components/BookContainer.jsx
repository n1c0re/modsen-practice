import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/BookContainer.css";

const BookContainer = (props) => {
  let path = "/book/";

  if ("bookData" in props) {
    console.log(props.bookData);
    return props.bookData.map((item) => {
      path += `${item.id}`;
        return (
          <div className="book-container">
            <NavLink to={path}>
              <img
                src={("imageLinks" in item.volumeInfo) ? item.volumeInfo.imageLinks.thumbnail : "../../public/undefinedBook.png"}
                alt="Book"
              />
            </NavLink>
            <div className="bookInfo">
              <p class="book-category">{("categories" in item.volumeInfo) ? item.volumeInfo.categories[0] : "No category"}</p>
              <h2 class="book-name">{("title" in item.volumeInfo) ? item.volumeInfo.title : "No title"}</h2>
              <p class="book-author">{("authors" in item.volumeInfo) ? item.volumeInfo.authors[0] : "No authors"}</p>
            </div>
          </div>
        );
    });
  } else {
    return "";
  }
};
export default BookContainer;
