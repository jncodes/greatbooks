import React from 'react';
import { Link } from 'react-router-dom';

const BooksIndexItem = (props) => {
    return (
        <ul className="book-item">
            <ul>
                <li><img className="book-image" src={props.image} alt="Image unavailable." /></li>
            </ul>
            <ul className="details">
                <li className="title"><Link to={`/books/show/${props.book_id}`}>{props.title}</Link></li>
                <li className="author">by <Link to="#">{props.authors}</Link></li>
            </ul>
            {/* <li>Description: {props.description}</li> */}
            {/* <li>Genres: {props.genres}</li> */}
            <br/>
        </ul>
    );
};

export default BooksIndexItem;