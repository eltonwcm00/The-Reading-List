import React, { useContext } from 'react'; //useContext is to enable context to be used in the functional based component
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    
    const { books } = useContext(BookContext);

    return (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id}>{book.title}</li> // consume the context from BookContext.js
                    );
                })}
            </ul>
        </div>
    );
}

export default BookList;