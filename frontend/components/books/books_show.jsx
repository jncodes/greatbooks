import React from 'react';
import { Link } from 'react-router-dom';

// const book = props.books.find(book => {
//     return props.history.location.pathname.includes(book.id + book.etag)
// });

export default class BooksShow extends React.Component {

    constructor(props) {
        debugger
        super(props);
        // this.state = {
        //     book: null
        // };
        debugger
    }
    
    componentDidMount() {
        debugger
        const book = this.props.fetchBook(this.props.bookId);
        debugger
        // this.setState({ book: book });
        // this.setState({ book: this.props.fetchBook(this.props.bookId) });
        // this.setState({ book: this.props.fetchBook(this.state.book.id) })
        debugger
    }

    render() {
        debugger
        const { book } = this.state;
        debugger
        if (book === null) {
            return (null);
        } else {
            // let id = book.id + book.etag;
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
        }
    }

} 
    // let id = book.id + book.etag;
    // let title = book.volumeInfo.title || 'Not available.';
    // let authors = book.volumeInfo.authors || ['Not available.'];
    // authors = authors.join(', ');
    // let genres = book.volumeInfo.categories || ['Not available.'];
    // genres = genres.join(', ');
    // let description = book.volumeInfo.description || 'Not available.';
    // let image;
    // if (book.volumeInfo.imageLinks) image = book.volumeInfo.imageLinks.thumbnail;
    // return (
    //     <div>
    //         <ul>
    //             <li><img src={image} alt="Image unavailable." /></li>
    //             <li>Title: <Link to={`/books/show/${id}`}>{title}</Link> by {authors}</li>
    //             <li>Description: {description}</li>
    //             <li>Genres: {genres}</li>
    //             <br />
    //         </ul>
    //     </div>
    // );
// };