import React from 'react'
import "./BookContainer.css"

const BookContainer = () => {
  return (
    <div class="book-container">
      <img
        src="https://www.codewars.com/packs/assets/logo.61192cf7.svg"
        alt="Book Cover"
      />
      <p class="book-category">Category</p>
      <h2 class="book-name">Name</h2>
      <p class="book-author">Author</p>
    </div>
  )
}

export default BookContainer