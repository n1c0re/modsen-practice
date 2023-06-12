import './App.css';
import BookPage from './Content/BookPage';
import SearchPage from './Content/SearchPage';
import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="wrapper">
    //   {/* <Header /> */}
    //     {/* <BookPage /> */}
    //     <SearchPage />
    // </div>
    <BrowserRouter>
    <div className="wrapper">
      <Header />
        <Routes>
        <Route path="/" element={<SearchPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
