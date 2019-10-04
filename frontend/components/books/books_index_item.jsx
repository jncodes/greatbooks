import React from 'react';
import { Link } from 'react-router-dom';

const BooksIndexItem = (props) => {
    return (
        <ul>
            <li><img src={props.image} alt="Image unavailable." /></li>
            <li>Title: <Link to='#'>{props.title}</Link> by {props.authors}</li>
            <li>Description: {props.description}</li>
            <li>Genres: {props.genres}</li>
            <br/>
        </ul>
    );
};

export default BooksIndexItem;