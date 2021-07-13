import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
 
const Navbar = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext); //destructure the ThemeContext properties
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark; //light is used if isLightTheme is true

    return (
        <nav style={ {background: theme.ui, color: theme.syntax} }> {/* accessing theme properties */}
            <h1>Reading List</h1>
            <div onClick={ toggleAuth }>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav> 
    );
}

export default Navbar;