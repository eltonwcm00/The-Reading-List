// Fucntional based componenet context

import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'name of the kings', author: 'brandon sanderson', id: 2}
    ]);

    // add book to the data
    const addBook = (title, author) => {
        // spread operator to extract prior data
        setBooks( [...books, {title: title, author: author, id: uuid()}] );
    }

    // remove book to the data (filter out the id that wanna to be removed)
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id)); //true, keep the data in array else filter out from the array
    }

    return(
        <BookContext.Provider value={ {books, addBook, removeBook} }>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;