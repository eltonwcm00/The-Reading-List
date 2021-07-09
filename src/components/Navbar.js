/* 2nd way of consuming the context *this method can be used in functional based component too */

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                
                    const { isLightTheme, light, dark } = context; //destructure the ThemeContext properties
                    const theme = isLightTheme ? light : dark; //light is used if isLightTheme is true

                    return (
                            <nav style={ {background: theme.ui, color: theme.syntax} }> {/* accessing theme properties */}
                                <h1>Reading List</h1>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav> 
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;