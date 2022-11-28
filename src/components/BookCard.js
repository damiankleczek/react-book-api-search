import React from 'react';

function BookCard({ book }) {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const placeholderUrl =
    'https://dummyimage.com/208x320/fff/000000&text=Image+Not+Available';

  const title = book.volumeInfo.title;
  const author = book.volumeInfo.authors.join(' & ');
  const publishDate = book.volumeInfo.publishedDate;
  const isbn = book.volumeInfo.industryIdentifiers[1].identifier;

  return (
    <div className="book">
      <div className="img-container">
        <img src={thumbnail ?? placeholderUrl} alt="book thumbnail" />
      </div>
      <div className="info">
        <h4>{title}</h4>
        <div className="hidden">
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Publish Date:</strong> {publishDate}
          </p>
          <p>
            <strong>{`ISBN Number:\n`}</strong>
            {isbn}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
