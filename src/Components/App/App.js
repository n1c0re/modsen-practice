import "./App.css";

import axios from "axios";
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookPage from "../BookPage/BookPage";
import ResultZone from "../ResultZone/ResultZone";
import SearchZone from "../SearchZone/SearchZone";

const BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = process.env.REACT_APP_API_KEY;

export const Context = createContext("");

function App() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");

  const [bookData, setData] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const [loading, setLoading] = useState(false);

  const searchBook = async () => {
    try {
      setLoading(true);
      document.documentElement.classList.add("waitingCursor");
      console.log(`startIndex search: ${startIndex}`);
      const response = await axios.get(
        `${BOOKS_API_URL}intitle:${search}+subject:${category}&startIndex=${startIndex}&orderBy=${sorting}&maxResults=40&key=${API_KEY}`
      );
      setData(response.data.items || []);
      setTotalItems(response.data.totalItems || 0);
      setLoading(false);
      document.documentElement.classList.remove("waitingCursor");
      console.log(bookData);
      console.log(
        `${BOOKS_API_URL}${search}+subject:${category}&startIndex=${startIndex}&orderBy=${sorting}&maxResults=40&key=${API_KEY}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearSearch = () => {
    setStartIndex(0);
    setData([]);
    searchBook();
  };

  const loadMore = async () => {
    console.log(`startIndex load: ${startIndex}`);
    try {
      setStartIndex(startIndex + 40);
      const response = await axios.get(
        `${BOOKS_API_URL}${search}+subject:${category}&startIndex=${startIndex}&orderBy=${sorting}&maxResults=40&key=${API_KEY}`
      );
      setData((prevBooks) => [...prevBooks, ...response.data.items]);
      console.log(bookData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <SearchZone
          setSearch={setSearch}
          setCategory={setCategory}
          setSorting={setSorting}
          clearSearch={clearSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div className="loading"> Loading books... </div>
              ) : (bookData) ? (
                <ResultZone
                  bookData={bookData}
                  loadMore={loadMore}
                  totalItems={totalItems}
                />
              ) : ("")
            }
          />
          <Route
            path="/book/:bookId"
            element={
              <Context.Provider value={bookData}>
                <BookPage />
              </Context.Provider>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
