import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProvider } from "../AppProvider";
import BookPage from "../BookPage/BookPage";
import ResultZone from "../ResultZone/ResultZone";
import SearchZone from "../SearchZone/SearchZone";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="wrapper">
          <SearchZone />
          <Routes>
            <Route path="/" element={<ResultZone />} />
            <Route path="/book/:bookId" element={<BookPage />} />
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
