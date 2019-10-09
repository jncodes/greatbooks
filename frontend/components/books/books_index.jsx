import React from 'react';
import BooksIndexItem from './books_index_item';

const BooksIndex = props => {
    debugger
    if (typeof props.books === 'undefined') {
        return null;
    } else {
        const books = props.books.map((book, idx) => {
            let id = book.id + book.etag;
            let title = book.volumeInfo.title || 'Not available.';
            let authors = book.volumeInfo.authors || ['Not available.'];
            authors = authors.join(', ');
            let genres = book.volumeInfo.categories || ['Not available.'];
            genres = genres.join(', ');
            let description = book.volumeInfo.description || 'Not available.';
            let image;
            if (book.volumeInfo.imageLinks) image = book.volumeInfo.imageLinks.thumbnail;
            return (
                <BooksIndexItem
                    key={id}
                    book_id={book.id}
                    title={title}
                    authors={authors}
                    description={description}
                    genres={genres}
                    image={image}
                    idx={idx}
                 />
            );
        })
        return (
           <div>
               <ul>
                   {books}
               </ul>
           </div> 
        );
    }
};

export default BooksIndex;