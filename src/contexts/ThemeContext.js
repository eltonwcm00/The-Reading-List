 import React, { Component, createContext } from 'react';

 export const ThemeContext = createContext();

 class ThemeContextProvider extends Component {
     
    state = {
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    }

    //State from ThemeToggle
    toggleTheme = () => {
        this.setState( {isLightTheme: !this.state.isLightTheme} );
    }
    
    render() {
         return (
             <ThemeContext.Provider value={ {...this.state, toggleTheme: this.toggleTheme} }> {/* Enable the context to be shared with different components */}
                {this.props.children} {/* Children = component that the context provider wraps*/}
             </ThemeContext.Provider>
         );
    }
 }

 export default ThemeContextProvider;