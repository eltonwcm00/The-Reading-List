import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    
    /****** Before useReducer ******/
    // const { addBook } = useContext(BookContext);
    
    /****** After useReducer ******/
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        
        // console.log(title, author);

        e.preventDefault();
        
        /****** Before useReducer ******/
        // addBook(title, author);
       
        /****** After useReducer ******/
        dispatch( {type: 'ADD_BOOK', book: {
            title,
            author
        }} );
        
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title}
                   onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Book Author" value={author}
                   onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="Add Book"/>
        </form>
    );
}

export default BookForm;