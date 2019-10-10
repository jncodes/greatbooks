import React from 'react';

import BooksIndexItem from './books_index_item';

export default class BooksIndex extends React.Component {

componentDidMount() {
    this.props.genre(this.props.subject)
}

    render() {
        if (typeof this.props.books === 'undefined') {
            return null;
        } else {
            const books = this.props.books.map((book, idx) => {
                let id = this.props.bookId[idx] + idx;
                let title = book.title || 'Not available.';
                let authors = book.authors || ['Not available.'];
                authors = authors.join(', ');
                let genres = book.categories || ['Not available.'];
                genres = genres.join(', ');
                let description = book.description || 'Not available.';
                let image;
                if (book.imageLinks) image = book.imageLinks.thumbnail;
                return (
                    <BooksIndexItem
                        key={id}
                        book_id={this.props.bookId[idx]}
                        title={title}
                        authors={authors}
                        description={description}
                        genres={genres}
                        image={image}
                        idx={idx}
                     />
                );
            });
            return (
               <div>
                   <ul>
                       {books}
                   </ul>
               </div> 
            );
        }
    }
};