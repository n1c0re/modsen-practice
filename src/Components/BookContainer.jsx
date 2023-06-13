import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/BookContainer.css";

const BookContainer = (props) => {
  let path = "/book/";

  if (props.bookData.length === 0) {
    return "";
  } else {
    console.log(props.bookData);
    return props.bookData.map((item) => {
      path += `${item.id}`;
      if (
        item.volumeInfo.imageLinks !== undefined &&
        item.volumeInfo.categories !== undefined &&
        item.volumeInfo.title !== undefined &&
        item.volumeInfo.authors !== undefined
      ) {
        return (
          <div className="book-container">
            <NavLink to={path}>
              <img
                src={item.volumeInfo.imageLinks.thumbnail}
                alt="Book image"
              />
            </NavLink>
            <div className="bookInfo">
              <p class="book-category">{item.volumeInfo.categories[0]}</p>
              <h2 class="book-name">{item.volumeInfo.title}</h2>
              <p class="book-author">{item.volumeInfo.authors[0]}</p>
            </div>
          </div>
        );
      }
    });
  }
  // return <></>;
};
export default BookContainer;
