import React, { useEffect, useState } from "react";
import "../Css/BookPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookPage = () => {
  const { bookId } = useParams();
  console.log(bookId);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(response);
        console.log(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        console.log(book);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [bookId]);

  if ("data" in book) {
    return (
      <div className="bookpage">
        <div className="bookImage">
          <img
            src={
              "imageLinks" in book.data.volumeInfo
                ? book.data.volumeInfo.imageLinks.thumbnail
                : "../../public/undefinedBook.png"
            }
            alt="Book Cover"
          />
        </div>
        <div className="info">
          <div classname="book-category">
            {"categories" in book.data.volumeInfo
              ? book.data.volumeInfo.categories[0]
              : "No category"}
          </div>
          <h2 classname="book-name">
            {"title" in book.data.volumeInfo
              ? book.data.volumeInfo.title
              : "No title"}
          </h2>
          <div classname="book-author">
            {"authors" in book.data.volumeInfo
              ? book.data.volumeInfo.authors[0]
              : "No authors"}
          </div>
          <div classname="book-description">
            {"description" in book.data.volumeInfo
              ? book.data.volumeInfo.description
              : "No description"}
          </div>
        </div>
      </div>
    );
  }
};

export default BookPage;
