export const add_to_shelf = shelved_book => {
    return $.ajax({
        method: "POST",
        url: "/api/shelved_books",
        data: { shelved_book }
    });
};

export const remove_from_shelf = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/shelved_books/${id}`
    });
};

export const fetchShelvedBooks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/shelved_books'
    });
};