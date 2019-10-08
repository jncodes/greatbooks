import React from 'react';
import { Link } from 'react-router-dom';

const BooksShow = props => {
    // if (state.entities.books.items) {
        const book = props.books.find(book => {
            return props.history.location.pathname.includes(book.id + book.etag)
        });
    //     return { book: book };
    // } else { return {}; }
    // if (props.book) {
        // const {book} = props.book
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
            <div>
                <ul>
                    <li><img src={image} alt="Image unavailable." /></li>
                    <li>Title: <Link to={`/books/show/${id}`}>{title}</Link> by {authors}</li>
                    <li>Description: {description}</li>
                    <li>Genres: {genres}</li>
                    <br />
                </ul>
            </div>
        );
    // } else { return null; }
};


export default BooksShow;