import React from 'react';

function BookCard({ book }) {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const placeholderUrl =
    'https://dummyimage.com/208x320/fff/000000&text=Image+Not+Available';

  const title = book.volumeInfo.title;
  const author = book.volumeInfo.authors.join(' & ');
  const publishDate = book.volumeInfo.publishedDate;
  const isbnNums = book.volumeInfo.industryIdentifiers;

  const getIsbn = nums => {
    const isbn13 = nums?.find(num => num.type === 'ISBN_13')?.identifier;
    return isbn13;
  };

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
            {getIsbn(isbnNums) ?? 'ISBN Not Specified'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
