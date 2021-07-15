// Fucntional based componenet context

import React, { createContext, useState, useReducer } from 'react';
import uuid from 'uuid/v1';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    
    // dispatch is the useReducer default function
    // useReducer(name of the reducer, data)
    const [books, dispatch] = useReducer(bookReducer, []);

    return(
        <BookContext.Provider value={ {books, dispatch} }>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;