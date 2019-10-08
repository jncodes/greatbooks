export const createShelf = shelf => {
    return $.ajax({
        method: "POST",
        url: "/api/shelves",
        data: { shelf }
    });
};

export const updateShelf = shelf => {
    return $.ajax({
        method: "PATCH",
        url: `/api/shelves/${shelf.id}`,
        data: { shelf }
    });
};

export const deleteShelf = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/shelves/${id}`
    });
};

export const fetchShelves = () => {
    debugger
    return $.ajax({
        method: 'GET',
        url: '/api/shelves'
    });
};

export const fetchShelf = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/shelves/${id}`
    });
};