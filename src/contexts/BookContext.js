// Fucntional based componenet context

import React, { createContext, useState, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    
    // dispatch is the useReducer default function
    // useReducer(name of the reducer, data)
    // 3rd argument is optional, to get data from local storage
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');

        if (localData) {
            return JSON.parse(localData);
        } else {
            return [];
        }
    });

    // whenever any changes in 'books', run this hook
    useEffect(() => {
        // setItem(key, value), stringify turn object into string
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return(
        <BookContext.Provider value={ {books, dispatch} }>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;