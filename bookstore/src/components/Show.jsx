import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Footer from './Footer';
import booksData from '../books'

function Show() {
    return (
        <>
            <Navbar />
            <div className='container mx-auto d-flex flex-wrap p-3'>
                {booksData.map((book) => (
                    <Book key={book.id}
                        name={book.name}
                        author={book.author}
                        rating={book.rating}
                        description={book.description} 
                        imageUrl={book.imageUrl}
                        />


                ))}
            </div>
            <Footer />
        </>
    );
}

export default Show;