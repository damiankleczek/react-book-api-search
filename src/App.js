import { useState } from 'react';

import BookCard from './components/BookCard';
import Searchbar from './components/Searchbar';
import Title from './components/Title';

import './App.css';

function App() {
  const [books, setBooks] = useState(null);

  const handleSetBooks = books => {
    setBooks(books);
  };

  const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

  return (
    <div className="app">
      <div className="container">
        <Title />
        <Searchbar
          searchUrl={BOOK_API_URL}
          handleSetBooks={handleSetBooks}
        />
        <div className="books-container">
          {books &&
            books.items.map(book => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
