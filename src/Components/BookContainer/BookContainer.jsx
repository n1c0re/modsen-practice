import "./BookContainer.css";

import React from "react";
import { Link } from "react-router-dom";

import undefinedBook from "../../assets/undefinedBook.png";

const BookContainer = (props) =>
  props.bookData.map((item) => (
    <Link to={`/book/${item.id}`}>
      <div className="bookContainer">
        <div className="containerImage">
          <img
            src={
              item?.volumeInfo?.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : undefinedBook
            }
            alt="Book"
          />
        </div>
        <div className="bookInfo">
          <div className="bookCategory">
            {item?.volumeInfo?.categories
              ? item.volumeInfo.categories[0]
              : "No category"}
          </div>
          <h2 className="bookName">
            {item?.volumeInfo?.title ? item.volumeInfo.title : "No title"}
          </h2>
          <div className="bookAuthor">
            {item?.volumeInfo?.authors
              ? item.volumeInfo.authors[0]
              : "No authors"}
          </div>
        </div>
      </div>
    </Link>
  ));
export default BookContainer;
