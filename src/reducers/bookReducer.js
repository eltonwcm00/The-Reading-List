import uuid from 'uuid/v1';

// Reducer takes in 2 functions, one is state, one is action
// dispatch( {type: , payload} )

export const bookReducer = (state, action) => {
    // check the type of action, before manipulate the state
    switch(action.type) {
        
        case 'ADD_BOOK' :
          // without reducer : setBooks( [...books, {title: title, author: author, id: uuid()}] );
          return [...state, {
              title: action.book.title, 
              author: action.book.author,
              id: uuid()
            }] 

        case 'REMOVE_BOOK' :
            // without reducer : setBooks(books.filter(book => book.id !== id));
            return state.filter(book => book.id !== action.id);
        
        default:
            return state;
    }
}