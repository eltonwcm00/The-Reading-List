import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
           <div className="book-list">
               <ul>
                   <li>The way of kings</li>
                   <li>The name of wind</li>
                   <li>The final empre</li>
               </ul>
           </div>
        );
    }
}

export default BookList;