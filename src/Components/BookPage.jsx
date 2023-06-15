import React, { useEffect, useState } from "react";
import "../Css/BookPage.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        console.log(loading);
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(response);
        console.log(loading);
        console.log(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        console.log(book);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchBook();
  }, [bookId]);

  if ("data" in book) {
    if (loading) {return <div>loading</div>} else {
    return (
      <div className="bookpage">
        <div className="bookImage">
          <img
            src={
              "imageLinks" in book.data.volumeInfo
                ? book.data.volumeInfo.imageLinks.thumbnail
                : "https://cdn-icons-png.flaticon.com/128/3557/3557574.png"
            }
            alt="Book Cover"
          />
        </div>
        <div className="info">
        <button className="backButton" onClick={handleClick}>Go Back</button>
          <div class="infoCategory">
            {"categories" in book.data.volumeInfo
              ? book.data.volumeInfo.categories[0]
              : "No category"}
          </div>
          <h2 class="infoName">
            {"title" in book.data.volumeInfo
              ? book.data.volumeInfo.title
              : "No title"}
          </h2>
          <div class="infoAuthor">
            {"authors" in book.data.volumeInfo
              ? book.data.volumeInfo.authors[0]
              : "No authors"}
          </div>
          <div class="infoDescription">
            {"description" in book.data.volumeInfo
              ? book.data.volumeInfo.description.slice(0,1700)
              : "No description"}
          </div>
        </div>
      </div>
    );}
  }
};

export default BookPage;
