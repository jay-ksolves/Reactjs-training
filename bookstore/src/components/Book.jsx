import React from 'react';
// import booksData from '../books'

function Book(props) {

    const truncateDescription = (description, maxWords) => {
        if (!description) {
            return 'No description available';
        }
        const words = description.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return description;
    };

    return (
        <>
            <div className="books m-3">
                {/* <img src={props.imageUrl} alt="" className="book-img" /> */}
                {/* <img src={props.imageUrl || 'placeholder-image-url'} alt="" className="book-img" /> */}
                {props.imageUrl && (
                    <img src={props.imageUrl} alt="" className="book-img" />
                )}

                <div className="descp">
                    <h2 className="book-name">{props.name}</h2>
                    <h3 className="author text-dark">by {props.author}</h3>
                    {/* <h3 className="rating">{props.rating}</h3> */}
                    {/* <p className="info">{props.description}</p> */}
                    <p className="info">{truncateDescription(props.description, 10)}</p>
                    <button type="submit" onClick={props.onSeeBook}>See the Book</button>
                </div>
            </div>

        </>
    );
}

export default Book;