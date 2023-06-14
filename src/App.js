import "./Css/App.css";
import BookPage from "./Components/BookPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchZone from "./Components/SearchZone";
import ResultZone from "./Components/ResultZone";
import axios from "axios";
import { useState } from "react";

const BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = "AIzaSyAVHh3aAiSke8Ap6Zx6qtYfTVTZsPqNP8U";

function App() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");

  const [bookData, setData] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const searchBook = async () => {
    try {
      console.log(`startIndex search: ${startIndex}`);
      const response = await axios.get(
        `${BOOKS_API_URL}${search}+subject:${category}&startIndex=${startIndex}&orderBy=${sorting}&maxResults=40&key=${API_KEY}`
      );
      setData(response.data.items || []);
      setTotalItems(response.data.totalItems || 0);
      console.log(bookData);
      console.log(
        `${BOOKS_API_URL}${search}+subject:${category}&startIndex=${startIndex}&orderBy=${sorting}&maxResults=40&key=${API_KEY}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearSearch = () => {
    setData([]);
    setStartIndex(0);
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
          // searchBook={searchBook}
          clearSearch={clearSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ResultZone
                bookData={bookData}
                loadMore={loadMore}
                totalItems={totalItems}
              />
            }
          />
          <Route path="/book/:bookId" element={<BookPage bookData={bookData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
