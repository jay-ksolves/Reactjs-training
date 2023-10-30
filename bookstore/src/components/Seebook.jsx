// import React from 'react';
// import Book from './Book';
// import booksData from '../books'

// function Seebook() {

//     return (
//         <div className='card container text-dark'>
//             <div className='row'>
//                 {booksData.map((book) => (
//                     <div className='col-md-4' key={book.id}>
//                         {book && (
//                             <Book
//                                 name={book.name}
//                                 author={book.author}
//                                 description={book.description}
//                                 imageUrl={book.imageUrl}
//                             />
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Seebook;


import React from 'react';

function Seebook({ book }) {
    return (
        <div className="card container text-dark">
        <br/>
        <h1  className= "text-center" style={{fontFamily:"lobster"}}>Book Details</h1>
        <hr style={{color:"cyan"}}/>
            <img src={book.imageUrl} alt={book.name} />
            <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.description}</p>
            </div>
        </div>
    );
}

export default Seebook;