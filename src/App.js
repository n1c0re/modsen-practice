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
  const [category, setCategory] = useState(" ");
  const [sorting, setSorting] = useState("relevance");
  const [bookData, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  const searchBook = () => {
    axios
      .get(
        `${BOOKS_API_URL}${search}+subject:${category}&startIndex=3&orderBy=${sorting}&key=${API_KEY}&maxResults=30`
      )
      .then((response) => setData(response))
      .catch((error) => console.log(error));
    console.log(bookData);
    console.log(
      `${BOOKS_API_URL}${search}+subject:${category}&orderBy=${sorting}&key=${API_KEY}&maxResults=30`
    );
  };
  return (
    <BrowserRouter>
      <div className="wrapper">
        <SearchZone
          setSearch={setSearch}
          setCategory={setCategory}
          setSorting={setSorting}
          searchBook={searchBook}
        />
        <Routes>
          <Route path="/" element={<ResultZone bookData={bookData} />} />
          <Route path="/book/" element={<BookPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
