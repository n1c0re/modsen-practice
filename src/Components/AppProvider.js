import axios from 'axios';
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = process.env.REACT_APP_API_KEY;

export const AppProvider = ({ children }) => {
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

    const contextValue = {
      search,
      setSearch,
      category,
      setCategory,
      sorting,
      setSorting,
      bookData,
      setBookData: setData,
      startIndex,
      setStartIndex,
      totalItems,
      setTotalItems,
      loading,
      setLoading,
      searchBook,
      clearSearch,
      loadMore,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}