import React, { useContext } from 'react'; //useContext is to enable context to be used in the functional based component
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    
    const { books } = useContext(BookContext);

    // check if the array does have the length
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (
                       <BookDetails book={book} key={book.id} /> //making a props for BookDetails, called book
                    );
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read</div>
    )
}

export default BookList;