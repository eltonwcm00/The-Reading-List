import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    
    state = {
        isAuthenticated: false
    }

    toggleAuth = () => {
        this.setState( {isAuthenticated: !this.state.isAuthenticated} );
    }
    
    render() {
        return (
            <AuthContext.Provider value={ {...this.state, toggleAuth: this.toggleAuth} }> {/* Enable the context to be shared with different components */}
               {this.props.children} {/* Children = component that the context provider wraps*/}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;