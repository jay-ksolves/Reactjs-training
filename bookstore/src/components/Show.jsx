import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Footer from './Footer';
import axios from 'axios';
import Seebook from './Seebook';

function Show() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Ruby on Rails');
    const [showBook, setShowBook] = useState(null);
    useEffect(() => {
        fetchBooks(searchTerm);
    }, [searchTerm]);

    const fetchBooks = async (query, startIndex = 0) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=20&key=AIzaSyAQUSJIORRBPqDICaizLvyianWkK0IrkAQ`
            );
            setBooks(response.data.items);

            // const newBooks = response.data.items;
            // setBooks((prevBooks) => [...prevBooks, ...newBooks]);
        } catch (error) {
            console.log(error);
            setBooks([]);
        }
    };
    function handleSeeBook(book) {
        console.log("See the Book");
        setShowBook(book);
    }
    return (
        <>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='container mx-auto d-flex flex-wrap p-3 '>
                {books && books.map((book) => (
                    <Book
                        key={book.id}
                        name={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
                        // rating={book.volumeInfo.rating || 'N/A'}
                        description={book.volumeInfo.description || 'No description available'}
                        imageUrl={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No Image available'}
                       onSeeBook={() => handleSeeBook(book)}
                    />
                ))}
            </div>
            <Footer />

            {showBook && <Seebook book={showBook}/>}
        </>
    );
}

export default Show;