import React from 'react';

import DetailInfo from './DetailInfo';

const BookCard = ({ book }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const placeholderUrl =
    'https://dummyimage.com/208x320/fff/000000&text=Image+Not+Available';

  const title = book.volumeInfo.title;
  const author = book.volumeInfo.authors?.join(' & ');
  const publishDate = book.volumeInfo.publishedDate;
  const isbnNums = book.volumeInfo.industryIdentifiers;
  const bookPreviewUrl = book.volumeInfo.previewLink;

  const getIsbn = nums => nums?.find(num => num.type === 'ISBN_13')?.identifier;

  return (
    <div className="book">
      <div className="img-container">
        <img
          src={thumbnail ?? placeholderUrl}
          alt="book thumbnail"
        />
      </div>
      <div className="info">
        <h4>
          <a href={bookPreviewUrl}>{title}</a>
        </h4>
        <div className="hidden">
          <DetailInfo
            label="Author"
            data={author}
          />
          <DetailInfo
            label="Publish Date"
            data={publishDate}
          />
          <DetailInfo
            label="ISBN Number"
            data={getIsbn(isbnNums)}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
