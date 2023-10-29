// import React from 'react'
// import Book from './Book'
// // import books from '../books'
// import books from '../books'
// function Seebook() {
//     return (
//         <div className='card container text-dark'>

//             {books.map((book) => (
//                 <Book
//                     key={book.id}
//                     name={book.volumeInfo.title}
//                     author={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
//                     // rating={book.volumeInfo.rating || 'N/A'}
//                     description={book.volumeInfo.description || 'No description available'}
//                     imageUrl={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No Image available'}
//                 />
//             ))}</div>

//     )
// }

// export default Seebook

import React from 'react';
import Book from './Book';
import booksData from '../books'

function Seebook() {
  
    return (
        <div className='card container text-dark'>
            <div className='row'>
                {booksData.map((book) => (
                    <div className='col-md-4' key={book.id}>
                        {book && (
                            <Book
                                name={book.name}
                                author={book.author}
                                description={book.description}
                                imageUrl={book.imageUrl}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seebook;
