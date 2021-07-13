import React, { useContext } from 'react'; //useContext is to enable context to be used in the functional based component
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);

    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={ {color: theme.syntax, background: theme.bg} }>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={ {background: theme.ui} }>{book.title}</li> // consume the context from BookContext.js
                    );
                })}
            </ul>
        </div>
    );
}

export default BookList;