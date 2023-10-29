import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Footer from './Footer';
import axios from 'axios';
import Seebook from './Seebook';

function Show() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Swami');
    const [showBook, setShowBook] = useState(false);
    useEffect(() => {
        fetchBooks(searchTerm);
    }, [searchTerm]);

    const fetchBooks = async (query) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAQUSJIORRBPqDICaizLvyianWkK0IrkAQ`
            );
            setBooks(response.data.items);
        } catch (error) {
            console.log(error);
            setBooks([]);
        }
    };

    function handleSeeBook() {
        console.log("See the Book");
        setShowBook(true);
    }
      

    return (
        <>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='container mx-auto d-flex flex-wrap p-3'>
                {books && books.map((book) => (
                    <Book
                        key={book.id}
                        name={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
                        // rating={book.volumeInfo.rating || 'N/A'}
                        description={book.volumeInfo.description || 'No description available'}
                        imageUrl={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No Image available'}
                        onSeeBook={handleSeeBook}
                    />
                ))}
            </div>
            <Footer />

            {showBook && <Seebook />}
        </>
    );
}

export default Show;