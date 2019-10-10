export const search = query => {
    return $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + query
    });
};

export const title = query => {
    return $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle: ' + query
    });
};

export const author = query => {
    return $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=inauthor: ' + query
    });
};

export const genre = query => {
    return $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=insubject: ' + query
    });
};

export const book = bookId => {
    return $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes/' + bookId
    });
};