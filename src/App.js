import { useEffect, useState } from 'react';

import BookCard from './components/BookCard';
import Searchbar from './components/Searchbar';
import Title from './components/Title';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {
  const [books, setBooks] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [currentBooks, setCurrentBooks] = useState(null);

  useEffect(() => {
    const slicedBooks = books?.items.slice(indexOfFirstBook, indexOfLastBook);
    setCurrentBooks(slicedBooks);
  }, [books, currentPage]);

  const handleSetBooks = books => setBooks(books);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

  return (
    <div className="app">
      <div className="container">
        <Title />
        <Searchbar
          searchUrl={BOOK_API_URL}
          maxResults={40}
          handleSetBooks={handleSetBooks}
        />
        <div className="books-container">
          {currentBooks &&
            currentBooks.map(book => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                />
              );
            })}
        </div>
        {currentBooks && (
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.items.length}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default App;
