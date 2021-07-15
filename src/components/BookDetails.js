import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ( {book} ) => { // book = got as a props from BookList
    
    /****** Before useReducer ******/
    // const { removeBook } = useContext(BookContext);

    /****** After useReducer ******/
    const { dispatch } = useContext(BookContext);
    
    /****** Before useReducer ******/
/*
    return(
        <li onClick = {() => removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
*/    

    /****** After useReducer ******/
    return(
        <li onClick = {() => dispatch( {type: 'REMOVE_BOOK', id: book.id} )}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}

export default BookDetails;