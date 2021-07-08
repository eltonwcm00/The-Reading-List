import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    static contextType = ThemeContext; //specify and accessing the context type             
                                       // * contextType can be usd in class based component only        

    render() {
       
        console.log(this.context);   
        const { isLightTheme, light, dark } = this.context; //destructure the ThemeContext properties
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
    }
}

export default Navbar;