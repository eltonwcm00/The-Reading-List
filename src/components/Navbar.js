import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
 
const Navbar = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext); //destructure the ThemeContext properties
    const theme = isLightTheme ? dark : light; //light is used if isLightTheme is true

    const { books } = useContext(BookContext);

    return (

        <div className="navbar" style={ {background: theme.ui, color: theme.syntax} }>
            <h1>Reading List</h1>
            <p>Currently you have { books.length } books to get through...</p>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <ThemeToggle />
            </div>
        </div>
    );
}

export default Navbar;