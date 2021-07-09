/* 2nd way of consuming the context *this method can be used in functional based component too (class based component)*/

import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
 
class Navbar extends Component {

    render() {
        return (
            <AuthContext.Consumer>
                {(authContext) => ( //2nd context return 1st context JSX
                    <ThemeContext.Consumer>
                        {(themeContext) => {
                            const { isAuthenticated, toggleAuth } = authContext; //2nd context
                            const { isLightTheme, light, dark } = themeContext; //destructure the ThemeContext properties
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
                        }}
                    </ThemeContext.Consumer>
                )}
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;