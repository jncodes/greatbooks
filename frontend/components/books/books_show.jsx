import React from 'react';
import { Link } from 'react-router-dom';

export default class BooksShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchBook(this.props.bookId);
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
                    <ul className="book-container">
                        <ul>
                            <li><img className="show-image" src={image} alt="Image unavailable." /></li>
                        </ul>
                        <ul className="show-detailss">
                            <li className="show-title"><Link to={`/books/show/${bookId}`}>{title}</Link></li>
                            <li className="show-author">by <Link to="#">{authors}</Link></li>
                            {/* <li>{description}</li> */}
                            {/* <li>Genres: {genres}</li> */}
                        </ul>
                        <br />
                    </ul>
                </div>
            );
        } 
    }
} 
