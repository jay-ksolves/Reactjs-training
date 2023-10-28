import React from 'react';
// import booksData from '../books'

function Book(props) {
    return (
        <>

            <div className="books m-3">

                <img src={props.imageUrl} alt="" className="book-img" />

                <div className="descp">
                    <h2 className="book-name">{props.name}</h2>
                    <h3 className="author">by {props.author}</h3>
                    <h3 className="rating">{props.rating} rating</h3>
                    <p className="info">{props.description}</p>
                    <button type="submit">
                        See the Book
                    </button>

                </div>
            </div>

        </>
    );
}

export default Book;