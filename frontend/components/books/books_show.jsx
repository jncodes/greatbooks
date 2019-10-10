import React from 'react';
import { Link } from 'react-router-dom';

export default class BooksShow extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchBook(this.props.bookId);
        // const book = this.props.fetchBook(this.props.bookId);
    }

    render() {
        if (typeof this.props.book === 'undefined') {
            return null;
        } else {
            const { book } = this.props;
            const { bookId } = this.props;
            let title = book.title || 'Not available.';
            let authors = book.authors || ['Not available.'];
            authors = authors.join(', ');
            let genres = book.categories || ['Not available.'];
            genres = genres.join(', ');
            let description = book.description || 'Not available.';
            let image;
            if (book.imageLinks) image = book.imageLinks.thumbnail;
            return (
                <div>
                    <ul>
                        <li><img src={image} alt="Image unavailable." /></li>
                        <li>Title: <Link to={`/books/show/${bookId}`}>{title}</Link> by {authors}</li>
                        <li>Description: {description}</li>
                        <li>Genres: {genres}</li>
                        <br />
                    </ul>
                </div>
            );
        } 
    }
} 
